import { mediaQuery } from "../../general/media-query";

export const seoQuery = `
    seo {
        metaTitle,
        metaDescription,
        metaImage {
            ${mediaQuery}
        }
        keywords,
        metaRobots,
        structuredData,
        metaViewport,
        canonicalURL
    }
`;
