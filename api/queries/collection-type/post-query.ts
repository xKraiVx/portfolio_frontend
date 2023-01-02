import { ELocalization } from "@cms/types/general/enums/localization";
import { seoQuery } from "../components/shared/seo-query";
import { mediaQuery } from "../general/media-query";

export const postSlugsQuery = `
    posts (locale: "${ELocalization.EN}") {
        data{
            attributes{
                slug
            }
        }
    }
`;

export const postBySlugQuery = (locale: string, postSlug: string) => `
    posts (locale: "${locale}", filters: { slug: {eq: "${postSlug}"}}) {
        data {
            attributes {
                slug
                title
                featured_image {
                    ${mediaQuery}
                }
                ${seoQuery}
                description
            }
        }
    }
`;
