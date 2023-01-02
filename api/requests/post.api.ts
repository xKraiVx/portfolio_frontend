import { axiosDecorator } from "../index";
import { postSlugsQuery } from "@api/queries/collection-type/post-query";
import { getQuery } from "@api/queries";
import { IPostSlugs } from "@cms/types/collection-types/post";
import { normalizePostSlugs } from "@cms/normalize/collection-types/normalize-post";
import { TPostSlugsN } from "@cms/normalized-types/collection-types/post-normalized";
import { postQuery } from "@api/queries/page/post-query";
import { normalizePostPage } from "@cms/normalize/page/normalize-post-page";

const getPostSlugs = async (): Promise<TPostSlugsN> => {
  try {
    const data = await axiosDecorator<IPostSlugs>(
      getQuery("posts", postSlugsQuery)
    );
    return normalizePostSlugs(data);
  } catch (error) {
    return error;
  }
};

const getPostPage = async (locale: string, slug: string) => {
  try {
    const data = await axiosDecorator<any>(
      getQuery("post", postQuery(locale, slug))
    );
    return normalizePostPage(data);
  } catch (error) {
    return error;
  }
};

export const postApi = {
  getPostPage,
  getPostSlugs,
};
