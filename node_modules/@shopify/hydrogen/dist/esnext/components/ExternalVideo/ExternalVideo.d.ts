import * as React from 'react';
import { YouTube, Vimeo } from '../../utilities';
import { Props } from '../types';
import { ExternalVideo as ExternalVideoType } from '../../graphql/types/types';
export interface ExternalVideoProps {
    /** An object with the keys `host`, `embeddedUrl`, and `id`. Refer to the Storefront API's
     * [`ExternalVideo` type](/api/storefront/reference/products/externalvideo).
     */
    data: Pick<ExternalVideoType, 'host' | 'embeddedUrl' | 'id'>;
    /** An object containing the options available for either
     * [YouTube](https://developers.google.com/youtube/player_parameters#Parameters) or
     * [Vimeo](https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters).
     */
    options?: YouTube | Vimeo;
}
declare type PropsWeControl = 'src';
/**
 * The `ExternalVideo` component renders an embedded video for the Storefront
 * API's [`ExternalVideo` object](/api/storefront/reference/products/externalvideo).
 */
export declare function ExternalVideo<TTag extends React.ElementType = 'iframe'>(props: Props<TTag, PropsWeControl> & ExternalVideoProps): JSX.Element;
export declare namespace ExternalVideo {
    var Fragment: string;
}
export declare const ExternalVideoFragment = "fragment ExternalVideoFragment on ExternalVideo {\n  id\n  embeddedUrl\n  host\n}\n\n";
export {};
