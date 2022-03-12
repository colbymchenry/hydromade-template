import { GraphQLConnection, ParsedMetafield, RawMetafield } from '../../types';
/**
 * The `useParsedMetafields` hook transforms a [MetafieldConnection](/api/storefront/reference/common-objects/metafieldconnection)
 * in an array of metafields whose `values` have been parsed according to the metafield `type`.
 */
export declare function useParsedMetafields(metafields: GraphQLConnection<RawMetafield> | undefined): ParsedMetafield[];
