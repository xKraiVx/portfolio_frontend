import { postBySlugQuery } from "@api/queries/collection-type/post-query";
import { headerQuery } from "@api/queries/single-type/header-query";

export const postQuery = (locale: string, postSlug: string) => `
    ${headerQuery(locale)}
    ${postBySlugQuery(locale, postSlug)}
`;
