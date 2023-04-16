import { mediaQuery } from "../../general/media-query";

export const homeWidgetHeroQuery = `
    ... on ComponentHomeWidgetHero {
        id
        name
        __typename
        slides {
            text,
            video {
                ${mediaQuery}
            },
            image {
                ${mediaQuery}
            }
        }
    }
`;
