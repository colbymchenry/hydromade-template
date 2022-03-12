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
exports.useRequestCacheData = exports.useServerRequest = exports.ServerRequestProvider = void 0;
const react_1 = __importStar(require("react"));
const cache_1 = require("../../framework/cache");
// Context to inject current request in SSR
const RequestContextSSR = (0, react_1.createContext)(null);
// Cache to inject current request in RSC
function requestCacheRSC() {
    return new Map();
}
requestCacheRSC.key = Symbol.for('HYDROGEN_REQUEST');
function ServerRequestProvider({ isRSC, request, children, }) {
    if (isRSC) {
        // Save the request object in a React cache that is
        // scoped to this current rendering.
        // @ts-ignore
        const requestCache = react_1.default.unstable_getCacheForType(requestCacheRSC);
        requestCache.set(requestCacheRSC.key, request);
        return children;
    }
    // Use a normal provider in SSR to make the request object
    // available in the current rendering.
    return (react_1.default.createElement(RequestContextSSR.Provider, { value: request }, children));
}
exports.ServerRequestProvider = ServerRequestProvider;
function useServerRequest() {
    let request;
    try {
        // Context only works in SSR rendering
        request = (0, react_1.useContext)(RequestContextSSR);
    }
    catch (error) {
        // If normal context failed it means this is not an SSR request.
        // Try getting RSC cache instead:
        // @ts-ignore
        const cache = react_1.default.unstable_getCacheForType(requestCacheRSC);
        request = cache ? cache.get(requestCacheRSC.key) : null;
    }
    if (!request) {
        // @ts-ignore
        if (__DEV__ && typeof jest !== 'undefined') {
            // Unit tests are not wrapped in ServerRequestProvider.
            // This mocks it, instead of providing it in every test.
            return { ctx: {} };
        }
        throw new Error('No ServerRequest Context found');
    }
    return request;
}
exports.useServerRequest = useServerRequest;
/**
 * Returns data stored in the request cache.
 * It will throw the promise if data is not ready.
 */
function useRequestCacheData(key, fetcher) {
    const { cache } = useServerRequest().ctx;
    const cacheKey = (0, cache_1.hashKey)(key);
    if (!cache.has(cacheKey)) {
        let data;
        let promise;
        cache.set(cacheKey, () => {
            if (data !== undefined)
                return data;
            if (!promise) {
                promise = fetcher().then((r) => (data = { data: r }), (e) => (data = { error: e }));
            }
            throw promise;
        });
    }
    return cache.get(cacheKey).call();
}
exports.useRequestCacheData = useRequestCacheData;
