import { IDefaultPageN } from "@cms/normalized-types/collection-types/page-normalized";
import { TDefaultPage } from "@cms/types/collection-types/default-page";
import { normalizeSeo } from "@cms/normalize/general/normalize-seo";
import { normalizeWidgets } from "@cms/normalize/templates/normalize-widgets";

export const normalizeDefaultPage = (
  pageData: TDefaultPage
): IDefaultPageN | null => {
  if (!pageData.data.length) {
    return null;
  }

  const {
    Widgets,
    seo,
    updatedAt,
    templateName,
    Title: title,
    Slug: slug,
  } = pageData?.data?.[0]?.attributes || {};
  const normilizedWidgets = Widgets ? normalizeWidgets(Widgets) : null;
  const normalizedSeo = seo ? normalizeSeo(seo, updatedAt) : null;

  return {
    title,
    slug,
    templateName,
    widgets: normilizedWidgets,
    seo: normalizedSeo,
  };
};
