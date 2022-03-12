import { GraphQLConnection } from '../../types';
/**
 * The `flattenConnection` utility transforms a connection object from the Storefront API (for example, [Product-related connections](/api/storefront/reference/products/product)) into a flat array of nodes.
 */
export declare function flattenConnection<T>(connection: GraphQLConnection<T>): T[];
