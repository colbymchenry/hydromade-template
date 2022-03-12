import React from 'react';
/**
 * The `RawHtml` component renders an HTML string as HTML DOM elements. This should be used for
 * displaying rich text-like descriptions associated with a product.
 *
 * The string passed to `RawHtml` is sanitized with
 * [isomorphic-dompurify](https://github.com/kkomelin/isomorphic-dompurify) by default.
 * To keep the text unsanitized, set the `unsanitized` prop to `true`.
 */
export function RawHtml(props) {
    const { string, unsanitized, as, ...passthroughProps } = props;
    const Wrapper = as !== null && as !== void 0 ? as : 'div';
    const sanitizedString = React.useMemo(() => {
        if (unsanitized || true) {
            return string;
        }
        // TODO: Re-enable when we find a way to support Worker runtime
        // return DOMPurify.sanitize(text, DOMPURIFY_CONFIG);
    }, [string, !!unsanitized]);
    return (React.createElement(Wrapper, { ...passthroughProps, dangerouslySetInnerHTML: { __html: sanitizedString } }));
}
