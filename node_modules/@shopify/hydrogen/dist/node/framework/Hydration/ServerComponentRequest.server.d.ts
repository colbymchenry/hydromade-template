import type { ShopifyContextValue } from '../../foundation/ShopifyProvider/types';
import { HelmetData as HeadData } from 'react-helmet-async';
import { QueryCacheControlHeaders } from '../../utilities/log/log-cache-header';
/**
 * This augments the `Request` object from the Fetch API:
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Request
 *
 * - Adds a `cookies` map for easy access
 * - Adds a static constructor to convert a Node.js `IncomingMessage` to a Request.
 */
export declare class ServerComponentRequest extends Request {
    cookies: Map<string, string>;
    id: string;
    time: number;
    ctx: {
        cache: Map<string, any>;
        head: HeadData;
        shopifyConfig?: ShopifyContextValue;
        queryCacheControl: Array<QueryCacheControlHeaders>;
        [key: string]: any;
    };
    constructor(input: any);
    constructor(input: RequestInfo, init?: RequestInit);
    private parseCookies;
}
