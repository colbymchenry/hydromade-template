import { ElementType } from 'react';
import { Props } from '../types';
export interface RawHtmlProps {
    /** An HTML string. */
    string: string;
    /** Whether the HTML string should be sanitized with `isomorphic-dompurify`. */
    unsanitized?: boolean;
    /** An HTML tag to be rendered as the base element wrapper. The default is `div`. */
    as?: ElementType;
}
/**
 * The `RawHtml` component renders an HTML string as HTML DOM elements. This should be used for
 * displaying rich text-like descriptions associated with a product.
 *
 * The string passed to `RawHtml` is sanitized with
 * [isomorphic-dompurify](https://github.com/kkomelin/isomorphic-dompurify) by default.
 * To keep the text unsanitized, set the `unsanitized` prop to `true`.
 */
export declare function RawHtml<TTag extends ElementType>(props: Props<TTag> & RawHtmlProps): JSX.Element;
