import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { ISeo } from "@cms/types/general/seo";
import { normalizeImage } from "./normalize-image";

export const normalizeSeo = (seoData?: ISeo): ISeoN | null => {
  if (!seoData) {
    return null;
  }

  const metaImage = seoData?.metaImage
    ? normalizeImage(seoData.metaImage)
    : null;
  return {
    ...seoData,
    metaImage,
  };
};
