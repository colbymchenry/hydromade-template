import { ElementType } from 'react';
import { Props } from '../../../types';
import { Rating } from '../../../../types';
export declare const STAR_EMPTY = "\u2606";
export declare const STAR_FILLED = "\u2605";
export interface StarRatingProps {
    rating: Rating;
    /** An HTML tag to be rendered as the base element wrapper. The default is `div`. */
    as?: ElementType;
}
export declare function StarRating<TTag extends ElementType>(props: Props<TTag> & StarRatingProps): JSX.Element;
export declare function Star({ percentFilled }: {
    percentFilled: number;
}): JSX.Element;
