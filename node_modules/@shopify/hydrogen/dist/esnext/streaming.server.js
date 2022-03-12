import { 
// @ts-ignore
renderToPipeableStream as _ssrRenderToPipeableStream, // Only available in Node context
// @ts-ignore
renderToReadableStream as _ssrRenderToReadableStream, // Only available in Browser/Worker context
 } from 'react-dom/server';
// @ts-ignore
import { renderToReadableStream as _rscRenderToReadableStream } from '@shopify/hydrogen/vendor/react-server-dom-vite/writer.browser.server';
// @ts-ignore
import { createFromReadableStream as _createFromReadableStream } from '@shopify/hydrogen/vendor/react-server-dom-vite';
export const rscRenderToReadableStream = _rscRenderToReadableStream;
export const createFromReadableStream = _createFromReadableStream;
export const ssrRenderToPipeableStream = _ssrRenderToPipeableStream;
export const ssrRenderToReadableStream = _ssrRenderToReadableStream;
export function supportsReadableStream() {
    try {
        new ReadableStream();
        return true;
    }
    catch (_) {
        return false;
    }
}
let cachedStreamingSupport;
export async function isStreamingSupported() {
    if (cachedStreamingSupport === undefined) {
        try {
            const rs = new ReadableStream({
                start(controller) {
                    controller.close();
                },
            });
            // This will throw in CFW until streaming
            // is supported. It works in Miniflare.
            await new Response(rs).text();
            cachedStreamingSupport = true;
        }
        catch (_) {
            cachedStreamingSupport = false;
        }
    }
    return cachedStreamingSupport;
}
export async function bufferReadableStream(reader, cb) {
    const decoder = new TextDecoder();
    let result = '';
    while (true) {
        const { done, value } = await reader.read();
        if (done)
            break;
        const stringValue = typeof value === 'string' ? value : decoder.decode(value);
        result += stringValue;
        if (cb) {
            cb(stringValue);
        }
    }
    return result;
}
