import { normalizePost } from "@cms/normalize/collection-types/normalize-post";
import { normalizeHeader } from "@cms/normalize/single-types/normalize-header";
import { ISinglePostN } from "@cms/normalized-types/page/single-post-normalized.type";
import { ISinglePost } from "@cms/types/page/single-post.type";

export const normalizePostPage = (data: ISinglePost): ISinglePostN => {
  const { header, posts } = data || {},
    normalizedHeader = normalizeHeader(header),
    normalizedPost = normalizePost(posts.data[0].attributes);
  return {
    header: normalizedHeader,
    post: normalizedPost,
  };
};
