import { BrowserHistory, Location } from 'history';
import { FC } from 'react';
declare type RouterContextValue = {
    history: BrowserHistory;
    location: Location;
};
export declare const Router: FC<{
    history?: BrowserHistory;
}>;
export declare function useRouter(): RouterContextValue;
export declare function useLocation(): Location;
export {};
