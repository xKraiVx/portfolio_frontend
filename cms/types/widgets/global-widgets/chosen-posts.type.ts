import { INavigationIdComponent } from "@cms/types/components/navigation-id-component";
import { IPageWidget } from "../widget.type";
import { TPostPreviews } from "@cms/types/collection-types/post.type";

export enum EChosenPostsType {
  BLOCK = "block",
}

export interface IChosenPosts
  extends IPageWidget<"ComponentGlobalWidgetChosenPosts"> {
  title?: string;
  type: EChosenPostsType;
  posts?: TPostPreviews;
  navigation_id: INavigationIdComponent;
  link?: string;
  linkText?: string;
}
