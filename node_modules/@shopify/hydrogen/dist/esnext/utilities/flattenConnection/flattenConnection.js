/**
 * The `flattenConnection` utility transforms a connection object from the Storefront API (for example, [Product-related connections](/api/storefront/reference/products/product)) into a flat array of nodes.
 */
export function flattenConnection(connection) {
    var _a;
    return ((_a = connection.edges) !== null && _a !== void 0 ? _a : []).map((edge) => edge.node);
}
