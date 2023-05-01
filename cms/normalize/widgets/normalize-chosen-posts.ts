import { formatWidgetName } from "@common/utils/format-widget-name/format-widget-name";
import { normalizeImage } from "../general/normalize-image";
import { normalizeNavigationId } from "../components/normalize-navigation-id";
import { IChosenPosts } from "@cms/types/widgets/global-widgets/chosen-posts.type";
import { IChosenPostsN } from "@cms/normalized-types/widgets/global-widgets/chosen-posts-normalized.type";
import { normalizePostPreviewsData } from "../collection-types/normalize-post";

export type TNormalizeChosenPosts = (data: IChosenPosts) => IChosenPostsN;

export const normalizeChosenPosts: TNormalizeChosenPosts = (data) => {
  const { __typename, title, link, linkText, navigation_id, posts, type } =
      data || {},
    normalizedPostPreviews = posts?.data.map((post) =>
      normalizePostPreviewsData(post)
    );

  return {
    name: __typename,
    template: formatWidgetName(__typename),
    title,
    type,
    link,
    linkText,
    navigation_id: normalizeNavigationId(navigation_id),
    posts: normalizedPostPreviews,
  };
};
