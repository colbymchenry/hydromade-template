import { MediaImageProps } from '../Image';
import { VideoProps } from '../Video';
import { ExternalVideoProps } from '../ExternalVideo';
import { ModelViewerProps } from '../ModelViewer';
import { Media as MediaType } from '../../graphql/types/types';
export declare type Media = Pick<MediaType, 'mediaContentType'>;
declare type MediaImageMedia = Media & {
    image: MediaImageProps['data'];
};
declare type ModelViewerMedia = Media & ModelViewerProps['data'];
declare type ExternalVideoMedia = Media & ExternalVideoProps['data'];
declare type VideoMedia = Media & VideoProps['data'];
export interface MediaFileProps {
    /** A [Media object](/api/storefront/reference/products/media). */
    data: MediaImageMedia | ModelViewerMedia | ExternalVideoMedia | VideoMedia;
    /** The options for the `Image`, `Video`, `ExternalVideo`, or `ModelViewer` components. */
    options?: VideoProps['options'] | ExternalVideoProps['options'];
}
/**
 * The `MediaFile` component renders the media for the Storefront API's
 * [Media object](/api/storefront/reference/products/media). It renders an `Image`, a
 * `Video`, an `ExternalVideo`, or a `ModelViewer` depending on the `mediaContentType` of the
 * `media` provided as a prop.
 */
export declare function MediaFile({ data, options, ...passthroughProps }: MediaFileProps): JSX.Element | null;
export declare namespace MediaFile {
    var Fragment: string;
}
export declare const MediaFileFragment = "\nfragment MediaFileFragment on Media {\n  ... on MediaImage {\n    mediaContentType\n    image {\n      ...ImageFragment\n    }\n  }\n  ... on Video {\n    mediaContentType\n    ...VideoFragment\n  }\n  ... on ExternalVideo {\n    mediaContentType\n    ...ExternalVideoFragment\n  }\n  ... on Model3d {\n    mediaContentType\n    ...Model3DFragment\n  }\n}\n\nfragment ImageFragment on Image {\n  id\n  url\n  altText\n  width\n  height\n}\n\nfragment VideoFragment on Video {\n  id\n  previewImage {\n    url\n  }\n  sources {\n    mimeType\n    url\n  }\n}\n\nfragment ExternalVideoFragment on ExternalVideo {\n  id\n  embeddedUrl\n  host\n}\n\nfragment Model3DFragment on Model3d {\n  id\n  alt\n  mediaContentType\n  previewImage {\n    url\n  }\n  sources {\n    url\n  }\n}\n";
export {};
