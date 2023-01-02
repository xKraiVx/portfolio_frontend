import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { ISeo } from "@cms/types/general/seo";
import { normalizeImage } from "./normalize-image";

export const normalizeSeo = (res: ISeo): ISeoN => {
  const metaImage = res?.metaImage ? normalizeImage(res.metaImage) : null;
  return {
    ...res,
    metaImage,
  };
};
