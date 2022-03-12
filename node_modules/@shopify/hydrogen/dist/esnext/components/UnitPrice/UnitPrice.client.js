import React from 'react';
import { Money } from '../Money';
import { UnitPriceFragment as Fragment } from '../../graphql/graphql-constants';
/**
 * The `UnitPrice` component renders a string with a [UnitPrice](/themes/pricing-payments/unit-pricing) as the
 * [Storefront API's `MoneyV2` object](/api/storefront/reference/common-objects/moneyv2) with a reference unit from the [Storefront API's `UnitPriceMeasurement` object](/api/storefront/reference/products/unitpricemeasurement).
 */
export function UnitPrice(props) {
    const { data, measurement, as, ...passthroughProps } = props;
    const Wrapper = as !== null && as !== void 0 ? as : 'div';
    return (React.createElement(Wrapper, { ...passthroughProps },
        React.createElement(Money, { data: data }),
        "/",
        measurement.referenceUnit));
}
UnitPrice.Fragment = Fragment;
export const UnitPriceFragment = Fragment;
