import { IHero } from "@cms/types/widgets/home-widgets/hero.type";
import { formatWidgetName } from "@common/utils/format-widget-name/format-widget-name";
import { normalizeImage } from "../general/normalize-image";
import { IInitialN } from "@cms/normalized-types/widgets/global-widgets/initial-normalized.type";
import { IInitial } from "@cms/types/widgets/global-widgets/initial.type";

export type TNormilizeInitial = (data: IInitial) => IInitialN;

export const normalizeInitial: TNormilizeInitial = (data) => {
  const { __typename, title, background } = data || {},
    normalizedBackground = background ? normalizeImage(background) : null;

  return {
    name: __typename,
    template: formatWidgetName(__typename),
    title,
    background: normalizedBackground,
  };
};
