import { IBlogPageN } from "@cms/normalized-types/single-types/blog-page-normalized";
import { TBlogPage } from "@cms/types/single-types/blog-page";
import { normalizeSeo } from "../general/normalize-seo";

export const normalizeBlogPage = (pageData: TBlogPage): IBlogPageN => {
  const { title, seo } = pageData?.data?.attributes || {};
  const normalizedSeo = normalizeSeo(seo);

  return {
    title: title,
    seo: normalizedSeo,
  };
};
