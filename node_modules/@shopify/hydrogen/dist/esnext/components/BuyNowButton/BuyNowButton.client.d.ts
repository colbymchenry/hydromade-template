import { ElementType } from 'react';
import type { ReactNode } from 'react';
import { Props } from '../types';
export interface BuyNowButtonProps {
    /** The item quantity. Defaults to 1. */
    quantity?: number;
    /** The ID of the variant. */
    variantId: string;
    /** An array of cart line attributes that belong to the item being added to the cart. */
    attributes?: {
        key: string;
        value: string;
    }[];
    /** Any `ReactNode` elements. */
    children: ReactNode;
}
export declare type BuyNowButtonPropsWeControl = 'onClick';
/** The `BuyNowButton` component renders a button that adds an item to the cart and redirects the customer to checkout. */
export declare function BuyNowButton<TTag extends ElementType = 'button'>(props: Props<TTag, BuyNowButtonPropsWeControl> & BuyNowButtonProps): JSX.Element;
