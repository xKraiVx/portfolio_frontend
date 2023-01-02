import { ILogoComponentN } from "@cms/normalized-types/components/logo-component-normalized";
import { ILogoComponent } from "@cms/types/components/logo-component";
import { normalizeImage } from "@cms/normalize/general/normalize-image";

export const normalizeLogo = (data: ILogoComponent): ILogoComponentN => {
  const { href, image } = data || {};

  return {
    href,
    image: normalizeImage(image),
  };
};
