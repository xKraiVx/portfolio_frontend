import { mediaQuery } from "@api/queries/general/media-query";

export const componentNavigationIdQuery = `
    identificator
    label
    icon {
        ${mediaQuery}
    }
`;
