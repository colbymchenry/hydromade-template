import * as React from 'react';
import { useEmbeddedVideoUrl } from '../../utilities';
import { ExternalVideoFragment as Fragment } from '../../graphql/graphql-constants';
/**
 * The `ExternalVideo` component renders an embedded video for the Storefront
 * API's [`ExternalVideo` object](/api/storefront/reference/products/externalvideo).
 */
export function ExternalVideo(props) {
    const { data, options, id = data.id, frameBorder = '0', allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowFullScreen = true, ...passthroughProps } = props;
    const url = useEmbeddedVideoUrl(data.embeddedUrl, options);
    return (React.createElement("iframe", { ...passthroughProps, id: id, frameBorder: frameBorder, allow: allow, allowFullScreen: allowFullScreen, src: url }));
}
ExternalVideo.Fragment = Fragment;
export const ExternalVideoFragment = Fragment;
