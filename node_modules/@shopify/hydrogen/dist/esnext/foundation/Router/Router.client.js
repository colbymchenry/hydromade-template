import { createBrowserHistory } from 'history';
import React, { createContext, useContext, useMemo, useState, useEffect, } from 'react';
import { META_ENV_SSR } from '../ssr-interop';
import { useServerState } from '../useServerState';
const RouterContext = createContext({});
export const Router = ({ history: pHistory, children, }) => {
    const history = useMemo(() => pHistory || createBrowserHistory(), [pHistory]);
    const [firstLoad, setFirstLoad] = useState(true);
    const [location, setLocation] = useState(history.location);
    const { pending, setServerState } = useServerState();
    useEffect(() => {
        // The app has just loaded
        if (firstLoad)
            setFirstLoad(false);
        // A navigation event has just happened
        else if (!pending) {
            window.scrollTo(0, 0);
        }
    }, [pending]);
    useEffect(() => {
        const unlisten = history.listen(({ location: newLocation }) => {
            setServerState({
                pathname: newLocation.pathname,
                search: location.search || undefined,
            });
            setLocation(newLocation);
        });
        return () => unlisten();
    }, [history]);
    return (React.createElement(RouterContext.Provider, { value: {
            history,
            location,
        } }, children));
};
export function useRouter() {
    const router = useContext(RouterContext);
    if (!router && META_ENV_SSR) {
        throw new Error('useRouter must be used within a <Router> component');
    }
    return router;
}
export function useLocation() {
    return useRouter().location;
}
