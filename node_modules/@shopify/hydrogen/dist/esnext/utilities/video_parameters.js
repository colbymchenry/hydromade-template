import { useMemo } from 'react';
export function addParametersToEmbeddedVideoUrl(url, parameters) {
    if (parameters == null) {
        return url;
    }
    const params = Object.keys(parameters).reduce((accumulator, param) => {
        const value = parameters[param];
        if (value == null) {
            return accumulator;
        }
        return accumulator + `&${param}=${value}`;
    }, '');
    return `${url}?${params}`;
}
export function useEmbeddedVideoUrl(url, parameters) {
    // Ensure a youtube shortened url is changed to an iFrame compatible embed link.
    // TODO: Fix is needed for SFAPI version 2022-01. Starting 2022-04 embeddedUrl has been marked as deprecated and replaced with
    // embedUrl. When the pinned SFAPI version is 2022-04 line can be removed in favor of changes on PR #455
    url = url.replace(/youtu\.be/, 'www.youtube.com/embed');
    return useMemo(() => {
        if (!parameters) {
            return url;
        }
        return addParametersToEmbeddedVideoUrl(url, parameters);
    }, [url, parameters]);
}
