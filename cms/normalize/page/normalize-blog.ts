import { IBlogN } from "@cms/normalized-types/page/blog-normalized";
import { IBlog } from "@cms/types/page/blog";
import { normalizePostPreviews } from "../collection-types/normalize-post";
import { normalizeBlogPage } from "../single-types/normalize-blog-page";
import { normalizeHeader } from "../single-types/normalize-header";

export const normalizeBlog = (data: IBlog): IBlogN => {
  const { header, blogPage, posts } = data || {},
    normalizedHeader = normalizeHeader(header),
    normalizedHomePage = normalizeBlogPage(blogPage),
    normalizedPosts = normalizePostPreviews(posts);

  return {
    header: normalizedHeader,
    blogPage: normalizedHomePage,
    posts: normalizedPosts,
  };
};
