import { ImportGlobEagerOutput } from '../types';
declare type RouteParams = Record<string, string>;
declare type RequestOptions = {
    params: RouteParams;
};
declare type ResourceGetter = (request: Request, requestOptions: RequestOptions) => Promise<Response | Object | String>;
interface HydrogenApiRoute {
    path: string;
    resource: ResourceGetter;
    hasServerComponent: boolean;
}
export declare type ApiRouteMatch = {
    resource: ResourceGetter;
    hasServerComponent: boolean;
    params: RouteParams;
};
export declare function getApiRoutesFromPages(pages: ImportGlobEagerOutput | undefined, topLevelPath?: string): Array<HydrogenApiRoute>;
export declare function getApiRouteFromURL(url: URL, routes: Array<HydrogenApiRoute>): ApiRouteMatch | null;
export declare function renderApiRoute(request: Request, route: ApiRouteMatch): Promise<Response>;
export {};
