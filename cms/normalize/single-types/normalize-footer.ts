import { normalizeLink } from "@cms/normalize/components/normalize-link";
import { TFooter } from "@cms/types/single-types/footer.type";
import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";

export const normalizeFooter = (res: TFooter): IFooterN => {
  const { designed_by, rights } = res.data.attributes || {};
  return {
    rights,
    designed_by: normalizeLink(designed_by) || null,
  };
};
