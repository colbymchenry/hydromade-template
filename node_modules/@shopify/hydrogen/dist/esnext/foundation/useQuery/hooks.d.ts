import type { CachingStrategy, QueryKey } from '../../types';
export interface HydrogenUseQueryOptions {
    cache?: CachingStrategy;
}
/**
 * The `useQuery` hook is a wrapper around Suspense calls and
 * global runtime's Cache if it exists.
 * It supports Suspense calls on the server and on the client.
 */
export declare function useQuery<T>(
/** A string or array to uniquely identify the current query. */
key: QueryKey, 
/** An asynchronous query function like `fetch` which returns data. */
queryFn: () => Promise<T>, 
/** Options including `cache` to manage the cache behavior of the sub-request. */
queryOptions?: HydrogenUseQueryOptions): {
    data?: undefined;
    error: Response;
} | {
    data: T;
    error?: undefined;
};
