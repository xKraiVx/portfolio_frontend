import { IBlogN } from "@cms/normalized-types/page/blog-normalized";
import { IBlog } from "@cms/types/page/blog";
import { normalizeBlogPage } from "../single-types/normalize-blog-page";
import { normalizeHeader } from "../single-types/normalize-header";

export const normalizeBlog = (data: IBlog): IBlogN => {
  const { header, blogPage } = data || {},
    normalizedHeader = normalizeHeader(header),
    normalizedHomePage = normalizeBlogPage(blogPage);
  console.log(data);

  return {
    header: normalizedHeader,
    blogPage: normalizedHomePage,
  };
};
