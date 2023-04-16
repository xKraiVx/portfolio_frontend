import { IPageWidget } from "../widget.type";

export interface ITitleAndText
  extends IPageWidget<"ComponentGlobalWidgetTitleAndText"> {
  title?: string;
  text?: string;
}
