import { IHomeN } from "@cms/normalized-types/page/home-normalized";
import { IHome } from "@cms/types/page/home";
import { normalizeHeader } from "../single-types/normalize-header";
import { normalizeHomePage } from "../single-types/normalize-home-page";

export const normalizeHome = (data: IHome): IHomeN => {
  const { header, homePage } = data || {},
    normalizedHeader = normalizeHeader(header),
    normalizedHomePage = normalizeHomePage(homePage);

  return {
    header: normalizedHeader,
    homePage: normalizedHomePage,
  };
};
