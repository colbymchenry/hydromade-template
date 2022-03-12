import * as React from 'react';
import { Image } from '../Image';
import { Video } from '../Video';
import { ExternalVideo } from '../ExternalVideo';
import { ModelViewer } from '../ModelViewer';
import { MediaFileFragment as Fragment } from '../../graphql/graphql-constants';
/**
 * The `MediaFile` component renders the media for the Storefront API's
 * [Media object](/api/storefront/reference/products/media). It renders an `Image`, a
 * `Video`, an `ExternalVideo`, or a `ModelViewer` depending on the `mediaContentType` of the
 * `media` provided as a prop.
 */
export function MediaFile({ data, options, ...passthroughProps }) {
    switch (data.mediaContentType) {
        case 'IMAGE': {
            return (React.createElement(Image, { ...passthroughProps, data: data.image, options: options }));
        }
        case 'VIDEO':
            return (React.createElement(Video, { ...passthroughProps, data: data, options: options }));
        case 'EXTERNAL_VIDEO':
            return (React.createElement(ExternalVideo, { ...passthroughProps, data: data, options: options }));
        case 'MODEL_3D':
            return (React.createElement(ModelViewer, { ...passthroughProps, data: data }));
        default:
            return null;
    }
}
MediaFile.Fragment = Fragment;
export const MediaFileFragment = Fragment;
