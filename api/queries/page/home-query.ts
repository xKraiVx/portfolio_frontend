import { headerQuery } from "@api/queries/single-type/header-query";
import { homePageQuery } from "@api/queries/single-type/home-page-query";
import { footerQuery } from "@api/queries/single-type/footer-query";

export const homeQuery = (locale: string) => `
    ${headerQuery(locale)}
    ${homePageQuery(locale)}
    ${footerQuery(locale)}
`;
