import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { TWidgetN } from "@cms/normalized-types/page-widgets/widget-normalized";
import { IHeaderN } from "./header-normalized";

export interface IHomePageN {
  widgets: TWidgetN[] | null;
  seo: ISeoN | null;
}
