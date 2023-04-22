import { formatWidgetName } from "@common/utils/format-widget-name/format-widget-name";
import { ITitleAndText } from "@cms/types/widgets/global-widgets/title-and-text.type";
import { ITitleAndTextN } from "@cms/normalized-types/widgets/global-widgets/title-and-text.type";
import { normalizeNavigationId } from "../components/normalize-navigation-id";

export type TNormilizeTitleAndText = (data: ITitleAndText) => ITitleAndTextN;

export const normalizeTitleAndText: TNormilizeTitleAndText = (data) => {
  const { __typename, title, text, navigation_id } = data || {};

  return {
    name: __typename,
    template: formatWidgetName(__typename),
    title,
    text,
    navigation_id: normalizeNavigationId(navigation_id),
  };
};
