import React from 'react';
import { Props } from '../types';
import { ImageSizeOptions, ImageLoaderOptions } from '../../utilities';
import { Image as ImageType } from '../../graphql/types/types';
export interface BaseImageProps {
    /** A custom function that generates the image URL. Parameters passed into this function includes
     * `src` and an `options` object that contains the provided `width`, `height` and `loaderOptions` values.
     */
    loader?(props: ImageLoaderOptions): string;
    /** An object of `loader` function options. For example, if the `loader` function requires a `scale` option,
     * then the value can be a property of the `loaderOptions` object (eg. `{scale: 2}`).
     */
    loaderOptions?: ImageLoaderOptions['options'];
}
export interface MediaImageProps extends BaseImageProps {
    /** An object with the keys `url`, `altText`, `id`, `width` and `height`. Refer to the
     * Storefront API's [`Image` object](/api/storefront/reference/common-objects/image).
     */
    data: Pick<ImageType, 'altText' | 'url' | 'id' | 'width' | 'height'>;
    /** An object of image size options for Shopify CDN images. */
    options?: ImageSizeOptions;
}
export interface ExternalImageProps extends BaseImageProps {
    /** A URL string. This string can be an absolute path or a relative path depending on the `loader`. */
    src: string;
    /** The integer value for the width of the image. This is a required prop when `src` is present. */
    width: number;
    /** The integer value for the height of the image. This is a required prop when `src` is present. */
    height: number;
}
export declare type ImageProps = MediaImageProps | ExternalImageProps;
declare type PropsWeControl = 'src' | 'width' | 'height';
/**
 * The `Image` component renders an image for the Storefront API's
 * [`Image` object](/api/storefront/reference/common-objects/image).
 */
export declare function Image<TTag extends React.ElementType = 'img'>(props: Props<TTag, PropsWeControl> & ImageProps): JSX.Element;
export declare namespace Image {
    var Fragment: string;
}
export declare const ImageFragment = "fragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\n";
export {};
