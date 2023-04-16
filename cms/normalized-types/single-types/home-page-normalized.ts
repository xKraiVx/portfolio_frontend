import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { TWidgetN } from "@cms/normalized-types/widgets/widget-normalized";

export interface IHomePageN {
  widgets: TWidgetN[] | null;
  seo: ISeoN | null;
}
