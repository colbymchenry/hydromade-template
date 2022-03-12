import { useShop } from '../../foundation/useShop';
import { getLoggerWithContext } from '../../utilities/log';
import { useQuery } from '../../foundation/useQuery';
import { fetchBuilder, graphqlRequestBody } from '../../utilities';
import { getConfig } from '../../framework/config';
import { useServerRequest } from '../../foundation/ServerRequestProvider';
/**
 * The `useShopQuery` hook allows you to make server-only GraphQL queries to the Storefront API. It must be a descendent of a `ShopifyProvider` component.
 */
export function useShopQuery({ query, variables = {}, cache, locale = '', }) {
    if (!import.meta.env.SSR) {
        throw new Error('Shopify Storefront API requests should only be made from the server.');
    }
    const serverRequest = useServerRequest();
    const log = getLoggerWithContext(serverRequest);
    const body = query ? graphqlRequestBody(query, variables) : '';
    const { request, key } = createShopRequest(body, locale);
    const { data, error: fetchError } = useQuery(key, query
        ? fetchBuilder(request)
        : // If no query, avoid calling SFAPI & return nothing
            async () => ({ data: undefined, errors: undefined }), { cache });
    /**
     * The fetch request itself failed, so we handle that differently than a GraphQL error
     */
    if (fetchError) {
        const errorMessage = `Failed to fetch the Storefront API. ${
        // 403s to the SF API (almost?) always mean that your Shopify credentials are bad/wrong
        fetchError.status === 403
            ? `You may have a bad value in 'shopify.config.js'`
            : `${fetchError.statusText}`}`;
        log.error(errorMessage);
        if (getConfig().dev) {
            throw new Error(errorMessage);
        }
        else {
            // in non-dev environments, we probably don't want super-detailed error messages for the user
            throw new Error(`The fetch attempt failed; there was an issue connecting to the data source.`);
        }
    }
    /**
     * GraphQL errors get printed to the console but ultimately
     * get returned to the consumer.
     */
    if (data === null || data === void 0 ? void 0 : data.errors) {
        const errors = data.errors instanceof Array ? data.errors : [data.errors];
        for (const error of errors) {
            if (getConfig().dev) {
                throw new Error(error.message);
            }
            else {
                log.error('GraphQL Error', error);
            }
        }
        log.error(`GraphQL errors: ${errors.length}`);
    }
    return data;
}
function createShopRequest(body, locale) {
    var _a;
    const { storeDomain, storefrontToken, storefrontApiVersion, locale: defaultLocale, } = useShop();
    const url = `https://${storeDomain}/api/${storefrontApiVersion}/graphql.json`;
    return {
        request: new Request(url, {
            method: 'POST',
            headers: {
                'X-Shopify-Storefront-Access-Token': storefrontToken,
                'content-type': 'application/json',
                'Accept-Language': (_a = locale) !== null && _a !== void 0 ? _a : defaultLocale,
            },
            body,
        }),
        key: [storeDomain, storefrontApiVersion, body, locale],
    };
}
