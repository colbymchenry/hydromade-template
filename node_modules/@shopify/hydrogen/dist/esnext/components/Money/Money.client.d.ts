import { ElementType } from 'react';
import { Props } from '../types';
import { MoneyV2 } from '../../graphql/types/types';
export interface MoneyProps {
    /** An HTML tag to be rendered as the base element wrapper. The default is `div`. */
    as?: ElementType;
    /** A [`MoneyV2` object](/api/storefront/reference/common-objects/moneyv2). */
    data: MoneyV2;
}
/**
 * The `Money` component renders a string of the Storefront API's
 * [`MoneyV2` object](/api/storefront/reference/common-objects/moneyv2) according to the
 * `defaultLocale` in the `shopify.config.js` file.
 */
export declare function Money<TTag extends ElementType>(props: Props<TTag> & MoneyProps): JSX.Element;
export declare namespace Money {
    var Fragment: string;
}
export declare const MoneyFragment = "fragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}\n";
