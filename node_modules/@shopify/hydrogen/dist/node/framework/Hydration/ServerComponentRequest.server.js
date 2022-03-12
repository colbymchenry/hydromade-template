"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerComponentRequest = void 0;
const timing_1 = require("../../utilities/timing");
const react_helmet_async_1 = require("react-helmet-async");
let reqCounter = 0; // For debugging
const generateId = typeof crypto !== 'undefined' &&
    // @ts-ignore
    !!crypto.randomUUID
    ? // @ts-ignore
        () => crypto.randomUUID()
    : () => `req${++reqCounter}`;
/**
 * This augments the `Request` object from the Fetch API:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Request
 *
 * - Adds a `cookies` map for easy access
 * - Adds a static constructor to convert a Node.js `IncomingMessage` to a Request.
 */
class ServerComponentRequest extends Request {
    constructor(input, init) {
        if (input instanceof Request) {
            super(input, init);
        }
        else {
            super(getUrlFromNodeRequest(input), {
                headers: new Headers(input.headers),
                method: input.method,
                body: input.method !== 'GET' && input.method !== 'HEAD'
                    ? input.body
                    : undefined,
            });
        }
        this.time = (0, timing_1.getTime)();
        this.id = generateId();
        this.ctx = {
            cache: new Map(),
            head: new react_helmet_async_1.HelmetData({}),
            queryCacheControl: [],
        };
        this.cookies = this.parseCookies();
    }
    parseCookies() {
        const cookieString = this.headers.get('cookie') || '';
        return new Map(cookieString
            .split(';')
            .map((chunk) => chunk.trim().split(/=(.+)/)));
    }
}
exports.ServerComponentRequest = ServerComponentRequest;
/**
 * @see https://github.com/frandiox/vitedge/blob/17f3cd943e86d7c0c71a862985ddd6caa2899425/src/node/utils.js#L19-L24
 *
 * Note: Request can sometimes be an instance of Express request, where `originalUrl` is the true source of what the
 * URL pathname is. We want to use that if it's present, so we union type this to `any`.
 */
function getUrlFromNodeRequest(request) {
    var _a;
    // TODO: Find out how to determine https from `request` object without forwarded proto
    const secure = request.headers['x-forwarded-proto'] === 'https';
    return new URL(`${secure ? 'https' : 'http'}://${request.headers.host + ((_a = request.originalUrl) !== null && _a !== void 0 ? _a : request.url)}`).toString();
}
