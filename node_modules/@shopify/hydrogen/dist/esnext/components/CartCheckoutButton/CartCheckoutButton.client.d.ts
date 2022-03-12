import React, { ReactNode } from 'react';
import { Props } from '../types';
declare type PropsWeControl = 'onClick';
/**
 * The `CartCheckoutButton` component renders a button that redirects to the checkout URL for the cart.
 * It must be a descendent of a `CartProvider` component.
 */
export declare function CartCheckoutButton<TTag extends React.ElementType = 'a'>(props: Props<TTag, PropsWeControl> & {
    /** A `ReactNode` element. */
    children: ReactNode;
}): JSX.Element;
export {};
