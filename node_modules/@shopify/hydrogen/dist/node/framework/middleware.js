"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hydrogenMiddleware = exports.graphiqlMiddleware = void 0;
const graphiql_1 = require("./graphiql");
function graphiqlMiddleware({ shopifyConfig, dev, }) {
    return async function (request, response, next) {
        const graphiqlRequest = dev && isGraphiqlRequest(request);
        if (graphiqlRequest) {
            return respondWithGraphiql(response, shopifyConfig);
        }
        next();
    };
}
exports.graphiqlMiddleware = graphiqlMiddleware;
/**
 * Provides middleware to Node.js Express-like servers. Used by the Hydrogen
 * Vite dev server plugin as well as production Node.js implementation.
 */
function hydrogenMiddleware({ dev, cache, indexTemplate, getServerEntrypoint, devServer, }) {
    /**
     * We're running in the Node.js runtime without access to `fetch`,
     * which is needed for proxy requests and server-side API requests.
     */
    const webPolyfills = !globalThis.fetch || !globalThis.ReadableStream
        ? Promise.resolve().then(() => __importStar(require('../utilities/web-api-polyfill'))) : undefined;
    return async function (request, response, next) {
        var _a, _b, _c;
        try {
            await webPolyfills;
            const entrypoint = await getServerEntrypoint();
            const handleRequest = (_a = entrypoint.default) !== null && _a !== void 0 ? _a : entrypoint;
            const eventResponse = await handleRequest(request, {
                dev,
                cache,
                indexTemplate,
                streamableResponse: response,
            });
            /**
             * If a `Response` was returned, that means it was not streamed.
             * Convert the response into a proper Node.js response.
             */
            if (eventResponse) {
                eventResponse.headers.forEach((value, key) => {
                    response.setHeader(key, value);
                });
                response.statusCode = eventResponse.status;
                if (eventResponse.body) {
                    response.write(eventResponse.body);
                }
                response.end();
            }
        }
        catch (e) {
            if (dev && devServer)
                devServer.ssrFixStacktrace(e);
            console.log(e.stack);
            response.statusCode = 500;
            /**
             * Attempt to print the error stack within the template.
             * This allows the react-refresh plugin and other Vite runtime helpers
             * to display the error and auto-refresh when the error is fixed, instead
             * of a white screen that needs a manual refresh.
             */
            try {
                const template = typeof indexTemplate === 'function'
                    ? await indexTemplate((_c = (_b = request.originalUrl) !== null && _b !== void 0 ? _b : request.url) !== null && _c !== void 0 ? _c : '')
                    : indexTemplate;
                const html = template.replace(`<div id="root"></div>`, `<div id="root"><pre><code>${e.stack}</code></pre></div>`);
                response.write(html);
                next(e);
            }
            catch (_e) {
                // If template loading is the culprit, give up and just return the error stack.
                response.write(e.stack);
                next(e);
            }
        }
    };
}
exports.hydrogenMiddleware = hydrogenMiddleware;
/**
 * /graphiql and /___graphql are supported
 */
function isGraphiqlRequest(request) {
    return /^\/(?:_{3})?graphi?ql/.test(request.url || '');
}
async function respondWithGraphiql(response, shopifyConfig) {
    if (!shopifyConfig) {
        throw new Error("You must provide shopifyConfig to Hydrogen's Vite middleware");
    }
    const { storeDomain, storefrontToken, storefrontApiVersion } = shopifyConfig;
    response.setHeader('Content-Type', 'text/html');
    response.end((0, graphiql_1.graphiqlHtml)(storeDomain === null || storeDomain === void 0 ? void 0 : storeDomain.replace(/^https?:\/\//, ''), storefrontToken, storefrontApiVersion));
}
