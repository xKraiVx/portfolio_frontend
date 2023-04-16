import { TMediaN } from "../../general/media-normalized";
import { IDefaultWidgetN } from "../../general/default-widget-normalized";

export interface IInitialN extends IDefaultWidgetN {
  title?: string;
  background?: TMediaN;
}
