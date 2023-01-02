import { ISlug, ISlugCollection } from "@cms/types/general/slug";

export const normalizeSlugs = (slugsData: ISlugCollection): string[] => {
  const normalizedSlugs = slugsData.data.map((slug) => slug.attributes.Slug);
  return normalizedSlugs;
};

export const normalizeSlug = (slugData: ISlug): string => {
  const normalizedSlug = slugData?.data?.attributes?.Slug;
  return normalizedSlug;
};
