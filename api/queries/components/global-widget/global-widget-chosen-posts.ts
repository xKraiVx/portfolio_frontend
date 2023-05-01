import { mediaQuery } from "@api/queries/general/media-query";
import { componentNavigationIdQuery } from "../components/component-navigation-id.query";

export const globalWidgetChosenPostsQuery = `
    ... on ComponentGlobalWidgetChosenPosts {
        id
        __typename
        title
        type
        posts {
            data {
                id
                attributes {
                    title
                    slug
                    description
                    featured_image {
                        ${mediaQuery}
                    }
                    category{
                        data{
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                    updatedAt
                }
            }
        }
        linkText
        link
        navigation_id {
            ${componentNavigationIdQuery}
        }
    }
`;
