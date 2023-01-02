import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";
import { THeader } from "@cms/types/single-types/header";
import { normalizeLogo } from "@cms/normalize/components/normalize-logo";
import { normalizeLink } from "@cms/normalize/components/normalize-link";

export const normalizeHeader = (res: THeader): IHeaderN => {
  const { logo, navigation } = res.data.attributes || {};

  const menu = navigation.map((item) => normalizeLink(item));
  const normalizedLogo = normalizeLogo(logo);

  return {
    logo: normalizedLogo,
    menu,
  };
};
