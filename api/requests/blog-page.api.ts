import { axiosDecorator } from "@api";
import { getQuery } from "@api/queries";
import { blogQuery } from "@api/queries/page/blog-query";
import { normalizeBlog } from "@cms/normalize/page/normalize-blog";
import { IBlog } from "@cms/types/page/blog";

const getBlogPage = async (locale: string) => {
  try {
    const data = await axiosDecorator<IBlog>(
      getQuery("blog", blogQuery(locale, 1))
    );
    return normalizeBlog(data);
  } catch (error) {
    return error;
  }
};

export const blogPageApi = {
  getBlogPage,
};
