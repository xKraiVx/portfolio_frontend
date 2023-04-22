import { componentNavigationIdQuery } from "../components/component-navigation-id.query";

export const globalWidgetTitleAndTextQuery = `
    ... on ComponentGlobalWidgetTitleAndText {
        id
        __typename
        title
        text
        navigation_id {
            ${componentNavigationIdQuery}
        }
    }
`;
