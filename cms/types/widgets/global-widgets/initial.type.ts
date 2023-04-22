import { INavigationIdComponent } from "@cms/types/components/navigation-id-component";
import { TMedia } from "../../general/media";
import { IPageWidget } from "../widget.type";

export interface IInitial extends IPageWidget<"ComponentGlobalWidgetInitial"> {
  title?: string;
  background?: TMedia;
  link_text?: string;
  link?: string;
  navigation_id: INavigationIdComponent;
}
