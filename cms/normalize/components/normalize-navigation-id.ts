import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";
import { ILinkComponent } from "@cms/types/components/link-component";
import { normalizeImage } from "@cms/normalize/general/normalize-image";
import { INavigationIdComponent } from "@cms/types/components/navigation-id-component";
import { INavigationIdComponentN } from "@cms/normalized-types/components/navigation-id-component-normalized.type";

export const normalizeNavigationId = (
  data: INavigationIdComponent
): INavigationIdComponentN => {
  const { identificator, label, icon } = data || {};

  return {
    label: label || null,
    identificator,
    icon: normalizeImage(icon) || null,
  };
};
