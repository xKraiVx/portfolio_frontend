import { IHomeN } from "@cms/normalized-types/page/home-normalized";
import { IHome } from "@cms/types/page/home";
import { normalizeFooter } from "@cms/normalize/single-types/normalize-footer";
import { normalizeHeader } from "@cms/normalize/single-types/normalize-header";
import { normalizeHomePage } from "@cms/normalize/single-types/normalize-home-page";

export const normalizeHome = (data: IHome): IHomeN => {
  const { header, homePage, footer } = data || {},
    normalizedHeader = normalizeHeader(header),
    normalizedHomePage = normalizeHomePage(homePage),
    normalizedFooter = normalizeFooter(footer);

  return {
    header: normalizedHeader,
    homePage: normalizedHomePage,
    footer: normalizedFooter,
  };
};
