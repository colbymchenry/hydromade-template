"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerComponentResponse = void 0;
const server_1 = require("react-dom/server");
const CachingStrategy_1 = require("../CachingStrategy");
class ServerComponentResponse extends Response {
    constructor() {
        super(...arguments);
        this.wait = false;
        /**
         * Allow custom body to be a string or a Promise.
         */
        this.customBody = '';
    }
    /**
     * Buffer the current response until all queries have resolved,
     * and prevent it from streaming back early.
     */
    doNotStream() {
        this.wait = true;
    }
    canStream() {
        return !this.wait;
    }
    cache(options) {
        this.cacheOptions = options;
    }
    get cacheControlHeader() {
        return (0, CachingStrategy_1.generateCacheControlHeader)(this.cacheOptions || (0, CachingStrategy_1.CacheSeconds)());
    }
    writeHead({ status, statusText, headers, } = {}) {
        if (status || statusText) {
            this.customStatus = { code: status, text: statusText };
        }
        if (headers) {
            for (const [key, value] of Object.entries(headers)) {
                this.headers.set(key, value);
            }
        }
    }
    redirect(location, status = 307) {
        this.writeHead({ status, headers: { location } });
    }
    /**
     * Send the response from a Server Component. Renders React components to string,
     * and returns `null` to make React happy.
     */
    send(body) {
        if (typeof body === 'object' &&
            body.$$typeof === Symbol.for('react.element')) {
            this.customBody = (0, server_1.renderToString)(body);
        }
        else {
            this.customBody = body;
        }
        return null;
    }
}
exports.ServerComponentResponse = ServerComponentResponse;
