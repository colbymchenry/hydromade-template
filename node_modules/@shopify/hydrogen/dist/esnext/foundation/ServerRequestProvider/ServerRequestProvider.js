import React, { createContext, useContext } from 'react';
import { hashKey } from '../../framework/cache';
// Context to inject current request in SSR
const RequestContextSSR = createContext(null);
// Cache to inject current request in RSC
function requestCacheRSC() {
    return new Map();
}
requestCacheRSC.key = Symbol.for('HYDROGEN_REQUEST');
export function ServerRequestProvider({ isRSC, request, children, }) {
    if (isRSC) {
        // Save the request object in a React cache that is
        // scoped to this current rendering.
        // @ts-ignore
        const requestCache = React.unstable_getCacheForType(requestCacheRSC);
        requestCache.set(requestCacheRSC.key, request);
        return children;
    }
    // Use a normal provider in SSR to make the request object
    // available in the current rendering.
    return (React.createElement(RequestContextSSR.Provider, { value: request }, children));
}
export function useServerRequest() {
    let request;
    try {
        // Context only works in SSR rendering
        request = useContext(RequestContextSSR);
    }
    catch (error) {
        // If normal context failed it means this is not an SSR request.
        // Try getting RSC cache instead:
        // @ts-ignore
        const cache = React.unstable_getCacheForType(requestCacheRSC);
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
/**
 * Returns data stored in the request cache.
 * It will throw the promise if data is not ready.
 */
export function useRequestCacheData(key, fetcher) {
    const { cache } = useServerRequest().ctx;
    const cacheKey = hashKey(key);
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
