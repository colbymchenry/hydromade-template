import React from 'react';
import { logServerResponse, logCacheControlHeaders, getLoggerWithContext, } from './utilities/log';
import { getErrorMarkup } from './utilities/error';
import { defer } from './utilities/defer';
import { Html } from './framework/Hydration/Html';
import { ServerComponentResponse } from './framework/Hydration/ServerComponentResponse.server';
import { ServerComponentRequest } from './framework/Hydration/ServerComponentRequest.server';
import { getCacheControlHeader } from './framework/cache';
import { ServerRequestProvider } from './foundation/ServerRequestProvider';
import { getApiRouteFromURL, renderApiRoute, getApiRoutesFromPages, } from './utilities/apiRoutes';
import { ServerStateProvider } from './foundation/ServerStateProvider';
import { isBotUA } from './utilities/bot-ua';
import { setContext, setCache } from './framework/runtime';
import { setConfig } from './framework/config';
import { ssrRenderToPipeableStream, ssrRenderToReadableStream, rscRenderToReadableStream, createFromReadableStream, supportsReadableStream, isStreamingSupported, bufferReadableStream, } from './streaming.server';
import { RSC_PATHNAME } from './constants';
import { stripScriptsFromTemplate } from './utilities/template';
const HTML_CONTENT_TYPE = 'text/html; charset=UTF-8';
export const renderHydrogen = (App, { pages }) => {
    const handleRequest = async function (rawRequest, { indexTemplate, streamableResponse, dev, cache, context, nonce }) {
        const request = new ServerComponentRequest(rawRequest);
        const url = new URL(request.url);
        const log = getLoggerWithContext(request);
        const componentResponse = new ServerComponentResponse();
        /**
         * Inject the cache & context into the module loader so we can pull it out for subrequests.
         */
        setCache(cache);
        setContext(context);
        setConfig({ dev });
        const isReactHydrationRequest = url.pathname === RSC_PATHNAME;
        let template = typeof indexTemplate === 'function'
            ? await indexTemplate(url.toString())
            : indexTemplate;
        if (template && typeof template !== 'string') {
            template = template.default;
        }
        if (!isReactHydrationRequest && pages) {
            const apiRoute = getApiRoute(url, { pages });
            // The API Route might have a default export, making it also a server component
            // If it does, only render the API route if the request method is GET
            if (apiRoute &&
                (!apiRoute.hasServerComponent || request.method !== 'GET')) {
                return renderApiRoute(request, apiRoute);
            }
        }
        const isStreamable = !isBotUA(url, request.headers.get('user-agent')) &&
            (!!streamableResponse || supportsReadableStream());
        const params = {
            App,
            log,
            dev,
            pages,
            nonce,
            request,
            template,
            isStreamable,
            componentResponse,
            response: streamableResponse,
        };
        if (isReactHydrationRequest) {
            return hydrate(url, params);
        }
        /**
         * Stream back real-user responses, but for bots/etc,
         * use `render` instead. This is because we need to inject <head>
         * things for SEO reasons.
         */
        if (isStreamable) {
            return stream(url, params);
        }
        return render(url, params);
    };
    return handleRequest;
};
function getApiRoute(url, { pages }) {
    const routes = getApiRoutesFromPages(pages);
    return getApiRouteFromURL(url, routes);
}
/**
 * The render function is responsible for turning the provided `App` into an HTML string,
 * and returning any initial state that needs to be hydrated into the client version of the app.
 * NOTE: This is currently only used for SEO bots or Worker runtime (where Stream is not yet supported).
 */
async function render(url, { App, pages, request, componentResponse, log, template, nonce, dev, }) {
    const state = { pathname: url.pathname, search: url.search };
    const { AppSSR, rscReadable } = buildAppSSR({
        App,
        state,
        request,
        response: componentResponse,
        pages,
        log,
    }, { template });
    let [html, flight] = await Promise.all([
        renderToBufferedString(AppSSR, { log, nonce }),
        bufferReadableStream(rscReadable.getReader()),
    ]);
    const { headers, status, statusText } = getResponseOptions(componentResponse);
    /**
     * TODO: Also add `Vary` headers for `accept-language` and any other keys
     * we want to shard our full-page cache for all Hydrogen storefronts.
     */
    headers[getCacheControlHeader({ dev })] = componentResponse.cacheControlHeader;
    if (componentResponse.customBody) {
        // This can be used to return sitemap.xml or any other custom response.
        logServerResponse('ssr', request, status);
        logCacheControlHeaders('ssr', request, componentResponse);
        return new Response(await componentResponse.customBody, {
            status,
            statusText,
            headers,
        });
    }
    headers['Content-type'] = HTML_CONTENT_TYPE;
    const { bodyAttributes, htmlAttributes, ...head } = extractHeadElements(request.ctx.head);
    html = html
        .replace(/<head>(.*?)<\/head>/s, generateHeadTag(head))
        .replace('<html', htmlAttributes ? `<html ${htmlAttributes}` : '$&')
        .replace('<body', bodyAttributes ? `<body ${bodyAttributes}` : '$&')
        .replace('</body>', flight
        ? `${flightContainer({ init: true, nonce, chunk: flight })}</body>`
        : '$&');
    logServerResponse('ssr', request, status);
    logCacheControlHeaders('ssr', request, componentResponse);
    return new Response(html, {
        status,
        statusText,
        headers,
    });
}
/**
 * Stream a response to the client. NOTE: This omits custom `<head>`
 * information, so this method should not be used by crawlers.
 */
async function stream(url, { App, pages, request, response, componentResponse, log, template, nonce, dev, }) {
    const state = { pathname: url.pathname, search: url.search };
    log.trace('start stream');
    const { noScriptTemplate, bootstrapScripts, bootstrapModules } = stripScriptsFromTemplate(template);
    const { AppSSR, rscReadable } = buildAppSSR({
        App,
        state,
        request,
        response: componentResponse,
        log,
        pages,
    }, {
        template: noScriptTemplate,
        htmlAttrs: { lang: 'en' },
    });
    const rscToScriptTagReadable = new ReadableStream({
        start(controller) {
            log.trace('rsc start chunks');
            let init = true;
            const encoder = new TextEncoder();
            bufferReadableStream(rscReadable.getReader(), (chunk) => {
                const scriptTag = flightContainer({ init, chunk, nonce });
                controller.enqueue(encoder.encode(scriptTag));
                init = false;
            }).then(() => {
                log.trace('rsc finish chunks');
                return controller.close();
            });
        },
    });
    let didError;
    if (__WORKER__) {
        const deferredShouldReturnApp = defer();
        const encoder = new TextEncoder();
        const transform = new TransformStream();
        const writable = transform.writable.getWriter();
        const responseOptions = {};
        const ssrReadable = ssrRenderToReadableStream(AppSSR, {
            nonce,
            bootstrapScripts,
            bootstrapModules,
            onCompleteShell() {
                log.trace('worker ready to stream');
                Object.assign(responseOptions, getResponseOptions(componentResponse, didError));
                /**
                 * TODO: This assumes `response.cache()` has been called _before_ any
                 * queries which might be caught behind Suspense. Clarify this or add
                 * additional checks downstream?
                 */
                responseOptions.headers[getCacheControlHeader({ dev })] =
                    componentResponse.cacheControlHeader;
                if (isRedirect(responseOptions)) {
                    // Return redirects early without further rendering/streaming
                    return deferredShouldReturnApp.resolve(false);
                }
                if (!componentResponse.canStream())
                    return;
                startWritingHtmlToStream(responseOptions, writable, encoder, dev ? didError : undefined);
                deferredShouldReturnApp.resolve(true);
            },
            async onCompleteAll() {
                log.trace('worker complete stream');
                if (componentResponse.canStream())
                    return;
                Object.assign(responseOptions, getResponseOptions(componentResponse, didError));
                if (isRedirect(responseOptions)) {
                    // Redirects found after any async code
                    return deferredShouldReturnApp.resolve(false);
                }
                if (componentResponse.customBody) {
                    writable.write(encoder.encode(await componentResponse.customBody));
                    return deferredShouldReturnApp.resolve(false);
                }
                startWritingHtmlToStream(responseOptions, writable, encoder, dev ? didError : undefined);
                deferredShouldReturnApp.resolve(true);
            },
            onError(error) {
                didError = error;
                if (dev && deferredShouldReturnApp.status === 'pending') {
                    writable.write(getErrorMarkup(error));
                }
                log.error(error);
            },
        });
        if (await deferredShouldReturnApp.promise) {
            let bufferedSsr = '';
            let isPendingSsrWrite = false;
            const writingSSR = bufferReadableStream(ssrReadable.getReader(), (chunk) => {
                bufferedSsr += chunk;
                if (!isPendingSsrWrite) {
                    isPendingSsrWrite = true;
                    setTimeout(() => {
                        isPendingSsrWrite = false;
                        // React can write fractional chunks synchronously.
                        // This timeout ensures we only write full HTML tags
                        // in order to allow RSC writing concurrently.
                        if (bufferedSsr) {
                            writable.write(encoder.encode(bufferedSsr));
                            bufferedSsr = '';
                        }
                    }, 0);
                }
            });
            const writingRSC = bufferReadableStream(rscToScriptTagReadable.getReader(), (scriptTag) => writable.write(encoder.encode(scriptTag)));
            Promise.all([writingSSR, writingRSC]).then(() => {
                // Last SSR write might be pending, delay closing the writable one tick
                setTimeout(() => writable.close(), 0);
                logServerResponse('str', request, responseOptions.status);
                logCacheControlHeaders('str', request, componentResponse);
            });
        }
        else {
            writable.close();
            logServerResponse('str', request, responseOptions.status);
            logCacheControlHeaders('str', request, componentResponse);
        }
        if (await isStreamingSupported()) {
            return new Response(transform.readable, responseOptions);
        }
        const bufferedBody = await bufferReadableStream(transform.readable.getReader());
        return new Response(bufferedBody, responseOptions);
    }
    else if (response) {
        response.socket.on('error', log.fatal);
        const { pipe } = ssrRenderToPipeableStream(AppSSR, {
            nonce,
            bootstrapScripts,
            bootstrapModules,
            onCompleteShell() {
                log.trace('node ready to stream');
                /**
                 * TODO: This assumes `response.cache()` has been called _before_ any
                 * queries which might be caught behind Suspense. Clarify this or add
                 * additional checks downstream?
                 */
                response.setHeader(getCacheControlHeader({ dev }), componentResponse.cacheControlHeader);
                writeHeadToServerResponse(response, componentResponse, log, didError);
                logServerResponse('str', request, response.statusCode);
                if (isRedirect(response)) {
                    // Return redirects early without further rendering/streaming
                    return response.end();
                }
                if (!componentResponse.canStream())
                    return;
                startWritingHtmlToServerResponse(response, dev ? didError : undefined);
                setTimeout(() => {
                    log.trace('node pipe response');
                    pipe(response);
                }, 0);
                bufferReadableStream(rscToScriptTagReadable.getReader(), (chunk) => {
                    log.trace('rsc chunk');
                    return response.write(chunk);
                });
            },
            async onCompleteAll() {
                log.trace('node complete stream');
                logCacheControlHeaders('str', request, componentResponse);
                if (componentResponse.canStream() || response.writableEnded)
                    return;
                writeHeadToServerResponse(response, componentResponse, log, didError);
                logServerResponse('str', request, response.statusCode);
                logCacheControlHeaders('str', request, componentResponse);
                if (isRedirect(response)) {
                    // Redirects found after any async code
                    return response.end();
                }
                if (componentResponse.customBody) {
                    return response.end(await componentResponse.customBody);
                }
                startWritingHtmlToServerResponse(response, dev ? didError : undefined);
                bufferReadableStream(rscToScriptTagReadable.getReader()).then((scriptTags) => {
                    // Piping ends the response so script tags
                    // must be written before that.
                    response.write(scriptTags);
                    pipe(response);
                });
            },
            onError(error) {
                didError = error;
                if (dev && response.headersSent) {
                    // Calling write would flush headers automatically.
                    // Delay this error until headers are properly sent.
                    response.write(getErrorMarkup(error));
                }
                log.error(error);
            },
        });
    }
}
/**
 * Stream a hydration response to the client.
 */
async function hydrate(url, { App, pages, request, response, componentResponse, isStreamable, log, }) {
    const state = JSON.parse(url.searchParams.get('state') || '{}');
    const { AppRSC } = buildAppRSC({
        App,
        state,
        request,
        response: componentResponse,
        log,
        pages,
    });
    if (__WORKER__) {
        const rscReadable = rscRenderToReadableStream(AppRSC);
        if (isStreamable && (await isStreamingSupported())) {
            logServerResponse('rsc', request, 200);
            logCacheControlHeaders('rsc', request, componentResponse);
            return new Response(rscReadable);
        }
        // Note: CFW does not support reader.piteTo nor iterable syntax
        const bufferedBody = await bufferReadableStream(rscReadable.getReader());
        logServerResponse('rsc', request, 200);
        logCacheControlHeaders('rsc', request, componentResponse);
        return new Response(bufferedBody);
    }
    else if (response) {
        response.socket.on('error', log.fatal);
        const rscWriter = await import(
        // @ts-ignore
        '@shopify/hydrogen/vendor/react-server-dom-vite/writer.node.server');
        const stream = rscWriter
            .renderToPipeableStream(AppRSC)
            .pipe(response);
        stream.on('finish', function () {
            logServerResponse('rsc', request, response.statusCode);
            logCacheControlHeaders('rsc', request, componentResponse);
        });
    }
}
function buildAppRSC({ App, state, request, response, log, pages, }) {
    const hydrogenServerProps = { request, response, log };
    const AppRSC = (React.createElement(ServerRequestProvider, { request: request, isRSC: true },
        React.createElement(App, { ...state, ...hydrogenServerProps, pages: pages })));
    return { AppRSC };
}
function buildAppSSR({ App, state, request, response, log, pages }, htmlOptions) {
    const { AppRSC } = buildAppRSC({
        App,
        state,
        request,
        response,
        log,
        pages,
    });
    const [rscReadableForFizz, rscReadableForFlight] = rscRenderToReadableStream(AppRSC).tee();
    const rscResponse = createFromReadableStream(rscReadableForFizz);
    const RscConsumer = () => rscResponse.readRoot();
    const AppSSR = (React.createElement(Html, { ...htmlOptions },
        React.createElement(ServerRequestProvider, { request: request, isRSC: false },
            React.createElement(ServerStateProvider, { serverState: state, setServerState: () => { } },
                React.createElement(React.Suspense, { fallback: null },
                    React.createElement(RscConsumer, null))))));
    return { AppSSR, rscReadable: rscReadableForFlight };
}
function extractHeadElements({ context: { helmet } }) {
    return helmet
        ? {
            base: helmet.base.toString(),
            bodyAttributes: helmet.bodyAttributes.toString(),
            htmlAttributes: helmet.htmlAttributes.toString(),
            link: helmet.link.toString(),
            meta: helmet.meta.toString(),
            noscript: helmet.noscript.toString(),
            script: helmet.script.toString(),
            style: helmet.style.toString(),
            title: helmet.title.toString(),
        }
        : {};
}
async function renderToBufferedString(ReactApp, { log, nonce }) {
    return new Promise(async (resolve, reject) => {
        if (__WORKER__) {
            const deferred = defer();
            const readable = ssrRenderToReadableStream(ReactApp, {
                nonce,
                onCompleteAll() {
                    /**
                     * We want to wait until `onCompleteAll` has been called before fetching the
                     * stream body. Otherwise, React 18's streaming JS script/template tags
                     * will be included in the output and cause issues when loading
                     * the Client Components in the browser.
                     */
                    deferred.resolve(null);
                },
                onError(error) {
                    log.error(error);
                    deferred.reject(error);
                },
            });
            await deferred.promise.catch(reject);
            resolve(await bufferReadableStream(readable.getReader()));
        }
        else {
            const writer = await createNodeWriter();
            const { pipe } = ssrRenderToPipeableStream(ReactApp, {
                nonce,
                /**
                 * When hydrating, we have to wait until `onCompleteAll` to avoid having
                 * `template` and `script` tags inserted and rendered as part of the hydration response.
                 */
                onCompleteAll() {
                    let data = '';
                    writer.on('data', (chunk) => (data += chunk.toString()));
                    writer.once('error', reject);
                    writer.once('end', () => resolve(data));
                    // Tell React to start writing to the writer
                    pipe(writer);
                },
                onError(error) {
                    log.error(error);
                    reject(error);
                },
            });
        }
    });
}
export default renderHydrogen;
function startWritingHtmlToServerResponse(response, error) {
    if (!response.headersSent) {
        response.setHeader('Content-type', HTML_CONTENT_TYPE);
        response.write('<!DOCTYPE html>');
    }
    if (error) {
        // This error was delayed until the headers were properly sent.
        response.write(getErrorMarkup(error));
    }
}
function startWritingHtmlToStream(responseOptions, writable, encoder, error) {
    responseOptions.headers['Content-type'] = HTML_CONTENT_TYPE;
    writable.write(encoder.encode('<!DOCTYPE html>'));
    if (error) {
        // This error was delayed until the headers were properly sent.
        writable.write(encoder.encode(getErrorMarkup(error)));
    }
}
function getResponseOptions({ headers, status, customStatus }, error) {
    var _a, _b;
    const responseInit = {};
    // @ts-ignore
    responseInit.headers = Object.fromEntries(headers.entries());
    if (error) {
        responseInit.status = 500;
    }
    else {
        responseInit.status = (_b = (_a = customStatus === null || customStatus === void 0 ? void 0 : customStatus.code) !== null && _a !== void 0 ? _a : status) !== null && _b !== void 0 ? _b : 200;
        if (customStatus === null || customStatus === void 0 ? void 0 : customStatus.text) {
            responseInit.statusText = customStatus.text;
        }
    }
    return responseInit;
}
function writeHeadToServerResponse(response, serverComponentResponse, log, error) {
    if (response.headersSent)
        return;
    log.trace('writeHeadToServerResponse');
    const { headers, status, statusText } = getResponseOptions(serverComponentResponse, error);
    response.statusCode = status;
    if (statusText) {
        response.statusMessage = statusText;
    }
    Object.entries(headers).forEach(([key, value]) => response.setHeader(key, value));
}
function isRedirect(response) {
    var _a, _b;
    const status = (_b = (_a = response.status) !== null && _a !== void 0 ? _a : response.statusCode) !== null && _b !== void 0 ? _b : 0;
    return status >= 300 && status < 400;
}
/**
 * Generate the contents of the `head` tag, and update the existing `<title>` tag
 * if one exists, and if a title is passed.
 */
function generateHeadTag({ title, ...rest }) {
    const headProps = ['base', 'meta', 'style', 'noscript', 'script', 'link'];
    const otherHeadProps = headProps
        .map((prop) => rest[prop])
        .filter(Boolean)
        .join('\n');
    return (_outerHtml, innerHtml) => {
        let headHtml = otherHeadProps + innerHtml;
        if (title) {
            if (headHtml.includes('<title>')) {
                headHtml = headHtml.replace(/(<title>(?:.|\n)*?<\/title>)/, title);
            }
            else {
                headHtml += title;
            }
        }
        return `<head>${headHtml}</head>`;
    };
}
async function createNodeWriter() {
    // Importing 'stream' directly breaks Vite resolve
    // when building for workers, even though this code
    // does not run in a worker. Looks like tree-shaking
    // kicks in after the import analysis/bundle.
    const streamImport = __WORKER__ ? '' : 'stream';
    const { PassThrough } = await import(streamImport);
    return new PassThrough();
}
function flightContainer({ init, chunk, nonce, }) {
    let script = `<script${nonce ? ` nonce="${nonce}"` : ''}>`;
    if (init) {
        script += 'var __flight=[];';
    }
    if (chunk) {
        const normalizedChunk = chunk
            // 1. Duplicate the escape char (\) for already escaped characters (e.g. \n or \").
            .replace(/\\/g, String.raw `\\`)
            // 2. Escape existing backticks to allow wrapping the whole thing in `...`.
            .replace(/`/g, String.raw `\``);
        script += `__flight.push(\`${normalizedChunk}\`)`;
    }
    return script + '</script>';
}
