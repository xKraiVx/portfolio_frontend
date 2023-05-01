import { IDefaultWidgetN } from "../../general/default-widget-normalized";
import { INavigationIdComponentN } from "@cms/normalized-types/components/navigation-id-component-normalized.type";
import { TMediaN } from "@cms/normalized-types/general/media-normalized";
import { EGalleryType } from "@cms/types/widgets/global-widgets/gallery.type";

export interface IGalleryN extends IDefaultWidgetN {
  title?: string;
  type: EGalleryType;
  images: TMediaN[];
  navigation_id: INavigationIdComponentN;
}
