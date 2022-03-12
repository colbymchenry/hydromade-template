import { ElementType } from 'react';
import { Props } from '../types';
import { ImageSizeOptions } from '../../utilities';
/**
 * The `CartLineImage` component renders an `Image` component for the cart line merchandise's image.
 * It must be a descendent of a `CartLineProvider` component.
 */
export declare function CartLineImage<TTag extends ElementType = 'img'>(props: Props<TTag> & {
    options?: ImageSizeOptions;
}): JSX.Element | null;
