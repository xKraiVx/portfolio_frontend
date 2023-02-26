import { IHomePageN } from "@cms/normalized-types/single-types/home-page-normalized";
import { THomePage } from "@cms/types/single-types/home-page";
import { normalizeSeo } from "../general/normalize-seo";
import { normalizeWidgets } from "../templates/normalize-widgets";

export const normalizeHomePage = (pageData: THomePage): IHomePageN => {
  const { widgets, seo } = pageData?.data?.attributes || {};

  const normalizedWidgets = widgets ? normalizeWidgets(widgets) : null;
  const normalizedSeo = seo ? normalizeSeo(seo) : null;
  return {
    widgets: normalizedWidgets,
    seo: normalizedSeo,
  };
};
