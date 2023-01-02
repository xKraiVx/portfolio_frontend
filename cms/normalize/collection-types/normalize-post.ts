import { TPostSlugsN } from "@cms/normalized-types/collection-types/post-normalized";
import { IPostSlugs } from "@cms/types/collection-types/post";

export const normalizePost = (postData: any): any => {
  return postData;
};

export const normalizePostSlugs = (slugsData: IPostSlugs): TPostSlugsN => {
  const normalizedPosts = slugsData?.posts?.data?.map(
    (slugData) => slugData.attributes.slug
  );

  if (!normalizedPosts) {
    throw new Error("Data has not retured! Check permissions and server state");
  }

  return normalizedPosts;
};
