import { INavigationIdComponentN } from "@cms/normalized-types/components/navigation-id-component-normalized.type";
import { IDefaultWidgetN } from "../../general/default-widget-normalized";

export interface ITitleAndTextN extends IDefaultWidgetN {
  title?: string;
  text?: string;
  navigation_id: INavigationIdComponentN;
}
