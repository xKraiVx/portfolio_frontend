import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";
import { ILinkComponent } from "@cms/types/components/link-component";
import { normalizeImage } from "@cms/normalize/general/normalize-image";

export const normalizeLink = (data: ILinkComponent): ILinkComponentN => {
  const { href, text, icon, openInNewTab } = data || {};

  return {
    text: text || null,
    href,
    icon: normalizeImage(icon) || null,
    openInNewTab: openInNewTab || null,
  };
};
