import React from 'react';
import { useUrl } from '../../foundation';
import { DefaultPageSeo } from './DefaultPageSeo.client';
import { HomePageSeo } from './HomePageSeo.client';
import { ProductSeo } from './ProductSeo.client';
import { CollectionSeo } from './CollectionSeo.client';
import { PageSeo } from './PageSeo.client';
/**
 * The `Seo` component renders SEO information on a webpage.
 */
export function Seo({ type, data }) {
    const url = useUrl().href;
    let SeoMarkup = null;
    switch (type) {
        case 'defaultSeo':
            SeoMarkup = React.createElement(DefaultPageSeo, { ...{ url, ...data } });
            break;
        case 'homepage':
            SeoMarkup = React.createElement(HomePageSeo, { ...{ url, ...data } });
            break;
        case 'product':
            SeoMarkup = React.createElement(ProductSeo, { ...{ url, ...data } });
            break;
        case 'collection':
            SeoMarkup = React.createElement(CollectionSeo, { ...data });
            break;
        case 'page':
            SeoMarkup = React.createElement(PageSeo, { ...data });
            break;
        default:
            console.warn('The <Seo/> only accepts type prop with values of defaultSeo, homepage, product, collection, or page.');
    }
    return SeoMarkup;
}
