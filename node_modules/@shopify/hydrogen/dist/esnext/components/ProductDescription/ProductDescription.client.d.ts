import { ElementType } from 'react';
import { Props } from '../types';
/**
 * The `ProductDescription` component renders a `RawHtml` component with
 * the product's [`descriptionHtml`](/api/storefront/reference/products/product).
 * It must be a descendent of the `ProductProvider` component.
 */
export declare function ProductDescription<TTag extends ElementType = 'div'>(props: Props<TTag>): JSX.Element | null;
