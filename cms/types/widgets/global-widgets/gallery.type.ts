import { INavigationIdComponent } from "@cms/types/components/navigation-id-component";
import { TMedia, TMediaCollection } from "../../general/media";
import { IPageWidget } from "../widget.type";

export enum EGalleryType {
  HONEYCOMBS = "honeycombs",
  BUBBLES = "bubbles",
}

export interface IGallery extends IPageWidget<"ComponentGlobalWidgetGallery"> {
  title?: string;
  gallery_type: EGalleryType;
  images: TMediaCollection;
  navigation_id: INavigationIdComponent;
}
