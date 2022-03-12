import * as React from 'react';
import { useImageUrl } from '../../utilities';
import { VideoFragment as Fragment } from '../../graphql/graphql-constants';
/**
 * The `Video` component renders a `video` for the Storefront API's [`Video` object](/api/storefront/reference/products/video).
 */
export function Video(props) {
    var _a;
    const { data, options, id = data.id, playsInline = true, controls = true, ...passthroughProps } = props;
    const posterUrl = useImageUrl((_a = data.previewImage) === null || _a === void 0 ? void 0 : _a.url, options);
    return (React.createElement("video", { ...passthroughProps, id: id, playsInline: playsInline, controls: controls, poster: posterUrl }, data.sources.map((source) => (React.createElement("source", { key: source.url, src: source.url, type: source.mimeType })))));
}
Video.Fragment = Fragment;
export const VideoFragment = Fragment;
