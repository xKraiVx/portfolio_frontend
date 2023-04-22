import { INavigationIdComponent } from "@cms/types/components/navigation-id-component";
import { IPageWidget } from "../widget.type";

export interface ITitleAndText
  extends IPageWidget<"ComponentGlobalWidgetTitleAndText"> {
  title?: string;
  text?: string;
  navigation_id: INavigationIdComponent;
}
