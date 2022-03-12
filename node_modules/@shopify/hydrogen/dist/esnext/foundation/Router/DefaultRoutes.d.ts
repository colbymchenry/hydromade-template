import { ReactElement } from 'react';
import type { Logger } from '../../utilities/log/log';
import type { ImportGlobEagerOutput } from '../../types';
/**
 * Build a set of default Hydrogen routes based on the output provided by Vite's
 * import.meta.globEager method.
 *
 * @see https://vitejs.dev/guide/features.html#glob-import
 */
export declare function DefaultRoutes({ pages, serverState, fallback, log, }: {
    pages: ImportGlobEagerOutput;
    serverState: Record<string, any>;
    fallback?: ReactElement;
    log: Logger;
}): JSX.Element;
interface HydrogenRoute {
    component: any;
    path: string;
    exact: boolean;
}
export declare function createRoutesFromPages(pages: ImportGlobEagerOutput, topLevelPath?: string, log?: Logger | null): HydrogenRoute[];
export {};
