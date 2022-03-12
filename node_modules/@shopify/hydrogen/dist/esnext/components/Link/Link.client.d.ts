import React from 'react';
export interface LinkProps
/** All properties available to an `<a>` element are available. See [anchor element documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).*/
 extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    /** The destination URL that the link points to. This is the `href` attribute of the underlying `<a>` element. */
    to: string;
    /** Whether to update the state object or URL of the current history entry. Refer to the [history.replaceState documentation](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState). */
    replace?: boolean;
    /** The custom client state with the navigation. */
    clientState?: any;
    /** Whether to reload the whole document on navigation. */
    reloadDocument?: boolean;
}
/**
 * The `Link` component lets users navigate from one page to another.
 * It renders an accessible `<a>` element.
 */
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
