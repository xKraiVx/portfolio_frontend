import { ELocalization } from "@cms/types/general/enums/localization";
import { POST_PER_PAGE } from "@common/constants/postPerPage";
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
                category{
                    data{
                        attributes{
                            name
                            slug
                        }
                    }
                }
                tags {
                    data{
                        attributes{
                            name
                            slug
                        }
                    }
                }
            }
        }
    }
`;

export const postsQuery = (locale: string, page: number) => `
    posts(locale: "${locale}",  pagination:{ limit: ${POST_PER_PAGE}, start: ${
  (page - 1) * POST_PER_PAGE
} }) {
        data {
            attributes {
                slug
                title
                featured_image {
                    ${mediaQuery}
                }
                description
                category{
                    data{
                        attributes{
                            name
                            slug
                        }
                    }
                }
                tags {
                    data{
                        attributes{
                            name
                            slug
                        }
                    }
                }
            }
        }
    }
`;
