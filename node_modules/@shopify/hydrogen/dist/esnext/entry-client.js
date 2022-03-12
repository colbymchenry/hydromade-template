import React, { Suspense, useState } from 'react';
// @ts-ignore
import { hydrateRoot } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useServerResponse } from './framework/Hydration/rsc';
import { ServerStateProvider } from './client';
import { Router } from './foundation/Router/Router.client';
const renderHydrogen = async (ClientWrapper) => {
    const root = document.getElementById('root');
    if (!root) {
        console.error(`Could not find a root element <div id="root"></div> to render.`);
        return;
    }
    hydrateRoot(root, React.createElement(ErrorBoundary, { FallbackComponent: Error },
        React.createElement(Suspense, { fallback: null },
            React.createElement(Content, { clientWrapper: ClientWrapper }))));
};
export default renderHydrogen;
function Content({ clientWrapper: ClientWrapper = ({ children }) => children, }) {
    const [serverState, setServerState] = useState({
        pathname: window.location.pathname,
        search: window.location.search,
    });
    const response = useServerResponse(serverState);
    return (React.createElement(ServerStateProvider, { serverState: serverState, setServerState: setServerState },
        React.createElement(Router, null,
            React.createElement(ClientWrapper, null, response.readRoot()))));
}
function Error({ error }) {
    return (React.createElement("div", { style: { padding: '1em' } },
        React.createElement("h1", { style: { fontSize: '2em', marginBottom: '1em', fontWeight: 'bold' } }, "Error"),
        React.createElement("pre", { style: { whiteSpace: 'pre-wrap' } }, error.stack)));
}
