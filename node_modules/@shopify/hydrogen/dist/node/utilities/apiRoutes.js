"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderApiRoute = exports.getApiRouteFromURL = exports.getApiRoutesFromPages = void 0;
const matchPath_1 = require("./matchPath");
const log_1 = require("../utilities/log/");
let memoizedRoutes = [];
let memoizedPages = {};
function getApiRoutesFromPages(pages, topLevelPath = '*') {
    if (!pages || memoizedPages === pages)
        return memoizedRoutes;
    const topLevelPrefix = topLevelPath.replace('*', '').replace(/\/$/, '');
    const routes = Object.keys(pages)
        .filter((key) => pages[key].api)
        .map((key) => {
        const path = key
            .replace('./pages', '')
            .replace(/\.server\.(t|j)sx?$/, '')
            /**
             * Replace /index with /
             */
            .replace(/\/index$/i, '/')
            /**
             * Only lowercase the first letter. This allows the developer to use camelCase
             * dynamic paths while ensuring their standard routes are normalized to lowercase.
             */
            .replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase())
            /**
             * Convert /[handle].jsx and /[...handle].jsx to /:handle.jsx for react-router-dom
             */
            .replace(/\[(?:[.]{3})?(\w+?)\]/g, (_match, param) => `:${param}`);
        /**
         * Catch-all routes [...handle].jsx don't need an exact match
         * https://reactrouter.com/core/api/Route/exact-bool
         */
        const exact = !/\[(?:[.]{3})(\w+?)\]/.test(key);
        return {
            path: topLevelPrefix + path,
            resource: pages[key].api,
            hasServerComponent: !!pages[key].default,
            exact,
        };
    });
    memoizedRoutes = [
        ...routes.filter((route) => !route.path.includes(':')),
        ...routes.filter((route) => route.path.includes(':')),
    ];
    memoizedPages = pages;
    return memoizedRoutes;
}
exports.getApiRoutesFromPages = getApiRoutesFromPages;
function getApiRouteFromURL(url, routes) {
    let foundRoute, foundRouteDetails;
    for (let i = 0; i < routes.length; i++) {
        foundRouteDetails = (0, matchPath_1.matchPath)(url.pathname, routes[i]);
        if (foundRouteDetails) {
            foundRoute = routes[i];
            break;
        }
    }
    if (!foundRoute)
        return null;
    return {
        resource: foundRoute.resource,
        params: foundRouteDetails.params,
        hasServerComponent: foundRoute.hasServerComponent,
    };
}
exports.getApiRouteFromURL = getApiRouteFromURL;
async function renderApiRoute(request, route) {
    let response;
    const log = (0, log_1.getLoggerWithContext)(request);
    try {
        response = await route.resource(request, { params: route.params });
        if (!(response instanceof Response)) {
            if (typeof response === 'string' || response instanceof String) {
                response = new Response(response);
            }
            else if (typeof response === 'object') {
                response = new Response(JSON.stringify(response), {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        }
    }
    catch (e) {
        log.error(e);
        response = new Response('Error processing: ' + request.url, { status: 500 });
    }
    (0, log_1.logServerResponse)('api', request, response.status);
    return response;
}
exports.renderApiRoute = renderApiRoute;
