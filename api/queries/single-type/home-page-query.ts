import { seoQuery } from "@api/queries/components/shared/seo-query";
import { homeWidgetHeroQuery } from "@api/queries/components/home-widget/home-widget-hero-query";
import { globalWidgetInitialQuery } from "@api/queries/components/global-widget/global-widget-initial";
import { globalWidgetTitleAndTextQuery } from "@api/queries/components/global-widget/global-widget-title-and-text";

export const homePageQuery = (locale: string) => `
  homePage(locale: "${locale}"){
    data{
      attributes {
        widgets {
          ${homeWidgetHeroQuery}
          ${globalWidgetInitialQuery}
          ${globalWidgetTitleAndTextQuery}
        }
        ${seoQuery}
      }
    }
  }
`;
