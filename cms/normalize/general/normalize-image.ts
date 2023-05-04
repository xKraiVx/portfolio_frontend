import { TMediaN } from "@cms/normalized-types/general/media-normalized";
import { TMedia, TMediaCollection } from "@cms/types/general/media";

export const normalizeImage = (res: TMedia): TMediaN => {
  const data = res?.data?.attributes;
  return {
    ...data,
  };
};
export const normalizeMediaCollection = (res: TMediaCollection): TMediaN[] => {
  const data = res?.data?.map((image) => image.attributes);

  return data;
};
