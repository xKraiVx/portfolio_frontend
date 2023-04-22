import { TMediaN } from "../../general/media-normalized";
import { IDefaultWidgetN } from "../../general/default-widget-normalized";
import { INavigationIdComponentN } from "@cms/normalized-types/components/navigation-id-component-normalized.type";

export interface IInitialN extends IDefaultWidgetN {
  title?: string;
  background?: TMediaN;
  link_text?: string;
  link?: string;
  navigation_id: INavigationIdComponentN;
}
