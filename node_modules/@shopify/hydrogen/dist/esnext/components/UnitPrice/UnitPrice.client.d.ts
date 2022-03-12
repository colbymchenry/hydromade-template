import { ElementType } from 'react';
import { Props } from '../types';
import { UnitPriceMeasurement, MoneyV2 } from '../../graphql/types/types';
export interface UnitPriceProps {
    /** A [`MoneyV2` object](/api/storefront/reference/common-objects/moneyv2). */
    data: MoneyV2;
    /** A [`UnitPriceMeasurement` object](/api/storefront/reference/products/unitpricemeasurement). */
    measurement: UnitPriceMeasurement;
    /** An HTML tag to be rendered as the base element wrapper. The default is `div`. */
    as?: ElementType;
}
/**
 * The `UnitPrice` component renders a string with a [UnitPrice](/themes/pricing-payments/unit-pricing) as the
 * [Storefront API's `MoneyV2` object](/api/storefront/reference/common-objects/moneyv2) with a reference unit from the [Storefront API's `UnitPriceMeasurement` object](/api/storefront/reference/products/unitpricemeasurement).
 */
export declare function UnitPrice<TTag extends ElementType>(props: Props<TTag> & UnitPriceProps): JSX.Element;
export declare namespace UnitPrice {
    var Fragment: string;
}
export declare const UnitPriceFragment = "\nfragment UnitPriceFragment on ProductVariant {\n  unitPriceMeasurement {\n    measuredType\n    quantityUnit\n    quantityValue\n    referenceUnit\n    referenceValue\n  }\n  unitPrice {\n    ...MoneyFragment\n  }\n}\nfragment MoneyFragment on MoneyV2 {\n  currencyCode\n  amount\n}";
