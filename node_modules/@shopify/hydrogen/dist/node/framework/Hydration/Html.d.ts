import { ReactNode } from 'react';
declare type HtmlOptions = {
    children: ReactNode;
    template: string;
    htmlAttrs?: Record<string, string>;
    bodyAttrs?: Record<string, string>;
};
export declare function Html({ children, template, htmlAttrs, bodyAttrs }: HtmlOptions): JSX.Element;
export {};
