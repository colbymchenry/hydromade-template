"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
/// <reference types="vite/client" />
const react_1 = __importDefault(require("react"));
function Html({ children, template, htmlAttrs, bodyAttrs }) {
    let head = template.match(/<head>(.+?)<\/head>/s)[1] || '';
    // @ts-ignore
    if (import.meta.env.DEV) {
        // Fix React Refresh for async scripts.
        // https://github.com/vitejs/vite/issues/6759
        head = head.replace(/>(\s*?import[\s\w]+?['"]\/@react-refresh)/, ' async="">$1');
    }
    return (react_1.default.createElement("html", { ...htmlAttrs },
        react_1.default.createElement("head", { dangerouslySetInnerHTML: { __html: head } }),
        react_1.default.createElement("body", { ...bodyAttrs },
            react_1.default.createElement("div", { id: "root" }, children))));
}
exports.Html = Html;
