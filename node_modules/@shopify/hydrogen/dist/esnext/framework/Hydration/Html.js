/// <reference types="vite/client" />
import React from 'react';
export function Html({ children, template, htmlAttrs, bodyAttrs }) {
    let head = template.match(/<head>(.+?)<\/head>/s)[1] || '';
    // @ts-ignore
    if (import.meta.env.DEV) {
        // Fix React Refresh for async scripts.
        // https://github.com/vitejs/vite/issues/6759
        head = head.replace(/>(\s*?import[\s\w]+?['"]\/@react-refresh)/, ' async="">$1');
    }
    return (React.createElement("html", { ...htmlAttrs },
        React.createElement("head", { dangerouslySetInnerHTML: { __html: head } }),
        React.createElement("body", { ...bodyAttrs },
            React.createElement("div", { id: "root" }, children))));
}
