import { seoQuery } from "@api/queries/components/shared/seo-query";
import { globalWidgetInitialQuery } from "@api/queries/components/global-widget/global-widget-initial";
import { globalWidgetTitleAndTextQuery } from "@api/queries/components/global-widget/global-widget-title-and-text";
import { globalWidgetChosenPostsQuery } from "../components/global-widget/global-widget-chosen-posts";
import { globalWidgetGalleryQuery } from "../components/global-widget/global-widget-gallery";

export const homePageQuery = (locale: string) => `
  homePage(locale: "${locale}"){
    data{
      attributes {
        widgets {
          ${globalWidgetInitialQuery}
          ${globalWidgetTitleAndTextQuery}
          ${globalWidgetChosenPostsQuery}
          ${globalWidgetGalleryQuery}
        }
        ${seoQuery}
      }
    }
  }
`;
