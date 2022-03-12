import * as React from 'react';
import { Props } from '../types';
import { ImageSizeOptions } from '../../utilities';
import { Video as VideoType, VideoSource, Image } from '../../graphql/types/types';
export interface VideoProps {
    /** An object corresponding to the [GraphQL fragment](#graphql-fragment). */
    data: {
        id?: VideoType['id'];
        previewImage?: Pick<Image, 'url'>;
        sources: Pick<VideoSource, 'url' | 'mimeType'>[];
    };
    /** An object of image size options for the video's `previewImage`. */
    options?: ImageSizeOptions;
}
/**
 * The `Video` component renders a `video` for the Storefront API's [`Video` object](/api/storefront/reference/products/video).
 */
export declare function Video<TTag extends React.ElementType = 'video'>(props: Props<TTag> & VideoProps): JSX.Element;
export declare namespace Video {
    var Fragment: string;
}
export declare const VideoFragment = "fragment VideoFragment on Video {\n  id\n  previewImage {\n    url\n  }\n  sources {\n    mimeType\n    url\n  }\n}\n\n";
