import { TMedia } from "../../general/media";
import { IPageWidget } from "../widget.type";

export interface IInitial extends IPageWidget<"ComponentGlobalWidgetInitial"> {
  title?: string;
  background?: TMedia;
}
