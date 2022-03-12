import React, { createContext } from 'react';
export const ShopifyContext = createContext(null);
export function ShopifyProviderClient({ children, shopifyConfig, }) {
    return (React.createElement(ShopifyContext.Provider, { value: shopifyConfig }, children));
}
