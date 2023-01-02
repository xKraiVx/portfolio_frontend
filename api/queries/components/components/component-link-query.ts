import { mediaQuery } from "@api/queries/general/media-query";

export const componentLinkQuery = `
    text
    href
    openInNewTab
    icon {
        ${mediaQuery}
    }
`;
