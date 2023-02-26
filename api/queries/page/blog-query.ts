import { headerQuery } from "@api/queries/single-type/header-query";
import { homePageQuery } from "@api/queries/single-type/home-page-query";
import { postsQuery } from "../collection-type/post-query";
import { blogPageQuery } from "../single-type/blog-page-query";

export const blogQuery = (locale: string, page: number) => `
    ${headerQuery(locale)}
    ${blogPageQuery(locale)}
    ${postsQuery(locale, page)}
`;
