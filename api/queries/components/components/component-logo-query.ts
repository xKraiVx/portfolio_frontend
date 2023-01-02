import { mediaQuery } from "@api/queries/general/media-query";

export const componentLogoQuery = `
    href
    image {
        ${mediaQuery}
    }
`;
