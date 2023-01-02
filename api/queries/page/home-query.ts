import { headerQuery } from "@api/queries/single-type/header-query";
import { homePageQuery } from "@api/queries/single-type/home-page-query";

export const homeQuery = (locale: string) => `
    ${headerQuery(locale)}
    ${homePageQuery(locale)}
`;
