import { axiosDecorator } from "@api";
import { getQuery } from "@api/queries";
import { blogQuery } from "@api/queries/page/blog-query";
import { normalizeBlog } from "@cms/normalize/page/normalize-blog";
import { IBlog } from "@cms/types/page/blog";

const getBlogPage = async (locale: string, pageNumber: number = 1) => {
  const data = await axiosDecorator<IBlog>(
    getQuery("blog", blogQuery(locale, pageNumber))
  );
  return normalizeBlog(data);
};

export const blogPageApi = {
  getBlogPage,
};
