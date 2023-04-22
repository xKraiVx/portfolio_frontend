import { mediaQuery } from "@api/queries/general/media-query";
import { componentNavigationIdQuery } from "../components/component-navigation-id.query";

export const globalWidgetInitialQuery = `
    ... on ComponentGlobalWidgetInitial {
        id
        __typename
        title
        link
        link_text
        background {
            ${mediaQuery}
        }
        navigation_id {
            ${componentNavigationIdQuery}
        }
    }
`;
