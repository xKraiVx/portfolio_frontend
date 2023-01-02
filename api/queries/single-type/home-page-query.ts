import { seoQuery } from "@api/queries/components/shared/seo-query";
import { homeWidgetHeroQuery } from "@api/queries/components/home-widget/home-widget-hero-query";

export const homePageQuery = (locale: string) => `
  homePage(locale: "${locale}"){
    data{
      attributes {
        widgets {
          ${homeWidgetHeroQuery}
        }
        ${seoQuery}
      }
    }
  }
`;
