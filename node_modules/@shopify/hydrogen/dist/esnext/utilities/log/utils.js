export function findQueryName(key) {
    const decodeKey = decodeURIComponent(key);
    const match = decodeKey.match(/query ([^\s\()]*)\s?(|\(\{)/);
    if (match && match.length > 1) {
        return match[1];
    }
    return '<unknown>';
}
export function parseUrl(type, url) {
    return type === 'rsc'
        ? decodeURIComponent(url.substring(url.indexOf('=') + 1))
        : url;
}
