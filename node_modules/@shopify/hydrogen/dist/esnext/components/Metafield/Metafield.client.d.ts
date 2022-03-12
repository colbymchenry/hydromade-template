import { ElementType } from 'react';
import { Props } from '../types';
import { ParsedMetafield } from '../../types';
export interface MetafieldProps {
    /** A [Metafield object](/api/storefront/reference/common-objects/metafield) from the Storefront API. */
    data: ParsedMetafield;
    /** An HTML tag to be rendered as the base element wrapper. The default value varies depending on [metafield.type](/apps/metafields/types). */
    as?: ElementType;
}
/**
 * The `Metafield` component renders the value of a Storefront
 * API's [Metafield object](/api/storefront/reference/common-objects/metafield).
 *
 * Renders a smart default of the
 * Metafield's `value`. For more information, refer to the [Default Output](#default-output) section.
 */
export declare function Metafield<TTag extends ElementType>(props: Props<TTag> & MetafieldProps): JSX.Element | null;
export declare namespace Metafield {
    var Fragment: string;
}
export declare const MetafieldFragment = "\nfragment MetafieldFragment on Metafield {\n  id\n  type\n  namespace\n  key\n  value\n  createdAt\n  updatedAt\n  description\n  reference @include(if: $includeReferenceMetafieldDetails) {\n    __typename\n    ... on MediaImage {\n      id\n      mediaContentType\n      image {\n        ...ImageFragment\n      }\n    }\n  }\n}\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n";
