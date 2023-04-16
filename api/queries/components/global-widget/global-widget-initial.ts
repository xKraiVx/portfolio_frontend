import { mediaQuery } from "@api/queries/general/media-query";

export const globalWidgetInitialQuery = `
    ... on ComponentGlobalWidgetInitial {
        id
        __typename
        title
        background {
            ${mediaQuery}
        }
    }
`;
