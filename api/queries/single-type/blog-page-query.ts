import { seoQuery } from "@api/queries/components/shared/seo-query";

export const blogPageQuery = (locale: string) => `
  blogPage(locale: "${locale}"){
    data{
      attributes {
       title,
        ${seoQuery}
      }
    }
  }
`;
