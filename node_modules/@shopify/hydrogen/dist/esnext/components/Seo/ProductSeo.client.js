import React from 'react';
import { Head } from '../../client';
import { TitleSeo } from './TitleSeo.client';
import { DescriptionSeo } from './DescriptionSeo.client';
import { TwitterSeo } from './TwitterSeo.client';
import { ImageSeo } from './ImageSeo.client';
export function ProductSeo({ url, title, description, seo, vendor, featuredImage, variants, }) {
    var _a, _b;
    const seoTitle = (_a = seo === null || seo === void 0 ? void 0 : seo.title) !== null && _a !== void 0 ? _a : title;
    const seoDescription = (_b = seo === null || seo === void 0 ? void 0 : seo.description) !== null && _b !== void 0 ? _b : description;
    let firstVariantPrice;
    const productSchema = {
        '@context': 'http://schema.org/',
        '@type': 'Product',
        name: title,
        description,
        brand: {
            '@type': 'Thing',
            name: vendor,
        },
        url,
    };
    productSchema.image = featuredImage.url;
    if (variants.edges.length > 0) {
        const firstVariant = variants.edges[0].node;
        firstVariantPrice = firstVariant.priceV2;
        if (firstVariant && firstVariant.sku) {
            productSchema.sku = firstVariant.sku;
        }
        productSchema.offers = variants.edges.map(({ node }) => {
            const offerSchema = {
                '@type': 'Offer',
                availability: `https://schema.org/${node.availableForSale ? 'InStock' : 'OutOfStock'}`,
                price: node.priceV2.amount,
                priceCurrency: node.priceV2.currencyCode,
            };
            if (node.sku) {
                offerSchema.sku = node.sku;
            }
            if (node.image && node.image.url) {
                offerSchema.image = node.image.url;
            }
            return offerSchema;
        });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            React.createElement("meta", { property: "og:type", content: "og:product" }),
            firstVariantPrice && (React.createElement("meta", { property: "og:price:amount", content: `${firstVariantPrice.amount}` })),
            firstVariantPrice && (React.createElement("meta", { property: "og:price:currency", content: firstVariantPrice.currencyCode })),
            React.createElement("script", { type: "application/ld+json" }, JSON.stringify(productSchema))),
        React.createElement(TitleSeo, { title: seoTitle }),
        React.createElement(DescriptionSeo, { description: seoDescription }),
        React.createElement(TwitterSeo, { title: seoTitle, description: seoDescription }),
        featuredImage && React.createElement(ImageSeo, { ...featuredImage })));
}
