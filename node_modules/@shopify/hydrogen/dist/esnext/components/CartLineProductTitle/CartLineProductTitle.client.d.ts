import { ElementType } from 'react';
import { Props } from '../types';
/**
 * The `CartLineProductTitle` component renders a `span` element (or the type of HTML element specified by
 * the `as` prop) with the cart line merchandise's title. It must be a descendent of a `CartLineProvider` component.
 */
export declare function CartLineProductTitle<TTag extends ElementType>(props: Props<TTag> & {
    /** An HTML tag to be rendered as the base element wrapper. The default is `span`.  */
    as?: ElementType;
}): JSX.Element;
