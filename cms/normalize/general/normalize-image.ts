import { TMediaN } from "@cms/normalized-types/general/media-normalized";
import { TMedia } from "@cms/types/general/media";

export const normalizeImage = (res: TMedia): TMediaN => {
  const data = res?.data?.attributes;
  return {
    ...data,
  };
};
