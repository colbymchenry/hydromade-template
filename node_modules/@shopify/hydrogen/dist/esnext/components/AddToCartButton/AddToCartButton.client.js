import React, { useEffect, useState } from 'react';
import { useCart } from '../CartProvider';
import { useProduct } from '../ProductProvider';
/**
 * The `AddToCartButton` component renders a button that adds an item to the cart when pressed.
 * It must be a descendent of the `CartProvider` component.
 */
export function AddToCartButton(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const [addingItem, setAddingItem] = useState(false);
    const { variantId: explicitVariantId, quantity = 1, attributes, children, onAdd, accessibleAddingToCartLabel, ...passthroughProps } = props;
    const { status, id, cartCreate, linesAdd } = useCart();
    const product = useProduct();
    const variantId = (_h = (_e = (_b = explicitVariantId !== null && explicitVariantId !== void 0 ? explicitVariantId : (_a = product === null || product === void 0 ? void 0 : product.selectedVariant) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (_d = (_c = product === null || product === void 0 ? void 0 : product.variants) === null || _c === void 0 ? void 0 : _c.find((variant) => variant.availableForSale)) === null || _d === void 0 ? void 0 : _d.id) !== null && _e !== void 0 ? _e : (_g = (_f = product === null || product === void 0 ? void 0 : product.variants) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.id) !== null && _h !== void 0 ? _h : '';
    const disabled = explicitVariantId === null ||
        variantId === '' ||
        (product === null || product === void 0 ? void 0 : product.selectedVariant) === null ||
        addingItem ||
        passthroughProps.disabled;
    useEffect(() => {
        if (addingItem && status === 'idle') {
            setAddingItem(false);
        }
    }, [status, addingItem]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { ...passthroughProps, disabled: disabled, onClick: () => {
                setAddingItem(true);
                if (!id) {
                    cartCreate({
                        lines: [
                            {
                                quantity: quantity,
                                merchandiseId: variantId,
                                attributes: attributes,
                            },
                        ],
                    });
                }
                else {
                    linesAdd([
                        {
                            quantity: quantity,
                            merchandiseId: variantId,
                            attributes: attributes,
                        },
                    ]);
                }
            } }, children),
        accessibleAddingToCartLabel ? (React.createElement("p", { style: {
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                borderWidth: '0',
            }, role: "alert", "aria-live": "assertive" }, addingItem ? accessibleAddingToCartLabel : null)) : null));
}
