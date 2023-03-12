import { axiosDecorator } from "../index";
import { postSlugsQuery } from "@api/queries/collection-type/post-query";
import { getQuery } from "@api/queries";
import { IPostSlugs } from "@cms/types/collection-types/post.type";
import { normalizePostSlugs } from "@cms/normalize/collection-types/normalize-post";
import { TPostSlugsN } from "@cms/normalized-types/collection-types/post-normalized.type";
import { postQuery } from "@api/queries/page/post-query";
import { normalizePostPage } from "@cms/normalize/page/normalize-post-page";
import { ISinglePost } from "@cms/types/page/single-post.type";

const getPostSlugs = async (): Promise<TPostSlugsN> => {
  const data = await axiosDecorator<IPostSlugs>(
    getQuery("posts", postSlugsQuery)
  );
  return normalizePostSlugs(data);
};

const getPostPage = async (locale: string, slug: string) => {
  const data = await axiosDecorator<ISinglePost>(
    getQuery("post", postQuery(locale, slug))
  );
  return normalizePostPage(data);
};

export const postApi = {
  getPostPage,
  getPostSlugs,
};
