import { ElementType } from 'react';
import { MoneyProps } from '../Money';
import { Props } from '../types';
export interface CartLinePriceProps extends Omit<MoneyProps, 'data'> {
    /** The type of price. Valid values:`regular` (default) or `compareAt`. */
    priceType?: 'regular' | 'compareAt';
}
/**
 * The `CartLinePrice` component renders a `Money` component for the cart line merchandise's price or
 * compare at price. It must be a descendent of a `CartLineProvider` component.
 */
export declare function CartLinePrice<TTag extends ElementType>(props: Props<TTag> & CartLinePriceProps): JSX.Element | null;
