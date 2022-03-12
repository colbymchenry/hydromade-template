import type { DefaultPage, HomePage, Product, Collection, Page } from './types';
declare type Props = {
    type: 'defaultSeo';
    data: Pick<DefaultPage, Exclude<keyof DefaultPage, 'url'>>;
} | {
    type: 'homepage';
    data: Pick<HomePage, Exclude<keyof HomePage, 'url'>>;
} | {
    type: 'product';
    data: Pick<Product, Exclude<keyof Product, 'url'>>;
} | {
    type: 'collection';
    data: Collection;
} | {
    type: 'page';
    data: Page;
};
/**
 * The `Seo` component renders SEO information on a webpage.
 */
export declare function Seo({ type, data }: Props): JSX.Element | null;
export {};
