import { normalizePost } from "@cms/normalize/collection-types/normalize-post";
import { normalizeHeader } from "@cms/normalize/single-types/normalize-header";

export const normalizePostPage = (data: any): any => {
  const { header, posts } = data || {},
    normalizedHeader = normalizeHeader(header),
    normalizedPost = normalizePost(posts.data[0]);
  return {
    header: normalizedHeader,
    post: normalizedPost,
  };
};
