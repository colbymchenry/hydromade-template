import { ASTNode } from 'graphql';
import type { CachingStrategy } from '../../types';
export interface UseShopQueryResponse<T> {
    /** The data returned by the query. */
    data: T;
    errors: any;
}
/**
 * The `useShopQuery` hook allows you to make server-only GraphQL queries to the Storefront API. It must be a descendent of a `ShopifyProvider` component.
 */
export declare function useShopQuery<T>({ query, variables, cache, locale, }: {
    /** A string of the GraphQL query.
     * If no query is provided, useShopQuery will make no calls to the Storefront API.
     */
    query?: ASTNode | string;
    /** An object of the variables for the GraphQL query. */
    variables?: Record<string, any>;
    /** An object containing cache-control options for the sub-request. */
    cache?: CachingStrategy;
    /** A string corresponding to a valid locale identifier like `en-us` used to make the request. */
    locale?: string;
}): UseShopQueryResponse<T>;
