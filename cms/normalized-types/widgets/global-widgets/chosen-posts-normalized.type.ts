import { IDefaultWidgetN } from "../../general/default-widget-normalized";
import { INavigationIdComponentN } from "@cms/normalized-types/components/navigation-id-component-normalized.type";
import { IPostPreviewN } from "@cms/normalized-types/collection-types/post-normalized.type";
import { EChosenPostsType } from "@cms/types/widgets/global-widgets/chosen-posts.type";

export interface IChosenPostsN extends IDefaultWidgetN {
  title?: string;
  type: EChosenPostsType;
  posts?: IPostPreviewN[];
  navigation_id: INavigationIdComponentN;
  link?: string;
  linkText?: string;
}
