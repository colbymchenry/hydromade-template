import React, { useMemo } from 'react';
import { matchPath } from '../../utilities/matchPath';
import { BoomerangPage } from '../Boomerang/BoomerangPageTemplate.client';
import { Boomerang } from '../Boomerang/Boomerang.client';
/**
 * Build a set of default Hydrogen routes based on the output provided by Vite's
 * import.meta.globEager method.
 *
 * @see https://vitejs.dev/guide/features.html#glob-import
 */
export function DefaultRoutes({ pages, serverState, fallback, log, }) {
    const basePath = '/';
    const routes = useMemo(() => createRoutesFromPages(pages, basePath, log), [pages, basePath]);
    let foundRoute, foundRouteDetails;
    for (let i = 0; i < routes.length; i++) {
        foundRouteDetails = matchPath(serverState.pathname, routes[i]);
        if (foundRouteDetails) {
            foundRoute = routes[i];
            break;
        }
    }
    return foundRoute ? (React.createElement(React.Fragment, null,
        React.createElement(foundRoute.component, { params: foundRouteDetails.params, ...serverState }),
        React.createElement(Boomerang, null),
        React.createElement(BoomerangPage, { pageTemplate: foundRoute.component.name }))) : (React.createElement(React.Fragment, null,
        fallback,
        React.createElement(Boomerang, null),
        React.createElement(BoomerangPage, { pageTemplate: typeof (fallback === null || fallback === void 0 ? void 0 : fallback.type) === 'function'
                ? fallback === null || fallback === void 0 ? void 0 : fallback.type.name
                : fallback === null || fallback === void 0 ? void 0 : fallback.type })));
}
export function createRoutesFromPages(pages, topLevelPath = '*', log = null) {
    const topLevelPrefix = topLevelPath.replace('*', '').replace(/\/$/, '');
    const routes = Object.keys(pages)
        .map((key) => {
        let path = key
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
        if (path.endsWith('/') && path !== '/')
            path = path.substring(0, path.length - 1);
        /**
         * Catch-all routes [...handle].jsx don't need an exact match
         * https://reactrouter.com/core/api/Route/exact-bool
         */
        const exact = !/\[(?:[.]{3})(\w+?)\]/.test(key);
        if (!pages[key].default && !pages[key].api) {
            log === null || log === void 0 ? void 0 : log.warn(`${key} doesn't export a default React component or an API function`);
        }
        return {
            path: topLevelPrefix + path,
            component: pages[key].default,
            exact,
        };
    })
        .filter((route) => route.component);
    /**
     * Place static paths BEFORE dynamic paths to grant priority.
     */
    return [
        ...routes.filter((route) => !route.path.includes(':')),
        ...routes.filter((route) => route.path.includes(':')),
    ];
}
