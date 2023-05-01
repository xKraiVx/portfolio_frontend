import { mediaQuery } from "@api/queries/general/media-query";
import { componentNavigationIdQuery } from "@api/queries/components/components/component-navigation-id.query";

export const globalWidgetGalleryQuery = `
    ... on ComponentGlobalWidgetGallery {
        id
        __typename
        title
        gallery_type: type
        images (pagination: {limit:100}) {
            ${mediaQuery}
        }
        navigation_id {
            ${componentNavigationIdQuery}
        }
    }
`;
