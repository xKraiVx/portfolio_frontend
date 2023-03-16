import { headerQuery } from "@api/queries/single-type/header-query";
import { postsQuery } from "@api/queries/collection-type/post-query";
import { blogPageQuery } from "@api/queries/single-type/blog-page-query";
import { footerQuery } from "@api/queries/single-type/footer-query";

export const blogQuery = (locale: string, page: number) => `
    ${headerQuery(locale)}
    ${blogPageQuery(locale)}
    ${postsQuery(locale, page)}
    ${footerQuery(locale)}
`;
