import {
  IPostN,
  IPostsPreviewsN,
  TPostSlugsN,
} from "@cms/normalized-types/collection-types/post-normalized.type";
import {
  IPostData,
  IPostSlugs,
  TPostPreviews,
} from "@cms/types/collection-types/post.type";
import { normalizeImage } from "../general/normalize-image";
import { normalizeSeo } from "../general/normalize-seo";

export const normalizePost = (postData: IPostData): IPostN => {
  const { title, slug, category, tags, description, featured_image, seo } =
    postData;
  const normalizedImage = normalizeImage(featured_image);
  const normalizedSeo = normalizeSeo(seo);

  return {
    title,
    slug,
    category,
    tags,
    description,
    seo: normalizedSeo,
    featuredImage: normalizedImage,
  };
};
export const normalizePostPreviews = (
  postData: TPostPreviews
): IPostsPreviewsN => {
  const { meta, data } = postData;
  const normalizedData = data.map((post) => {
    const { title, slug, category, tags, featured_image, description } =
      post.attributes;
    const normalizedImage = normalizeImage(featured_image);
    return {
      title,
      slug,
      category,
      tags,
      description,
      featuredImage: normalizedImage,
    };
  });

  return {
    postsPreviews: normalizedData,
    pagination: meta?.pagination,
  };
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
