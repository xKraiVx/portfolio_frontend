import { TWidgetN } from "@cms/normalized-types/widgets/widget-normalized";
import { TPageWidget } from "@cms/types/widgets/widget.type";
import { normalizeWidgetsList } from "../widgets";
import { formatWidgetName } from "@common/utils/format-widget-name/format-widget-name";

export const normalizeWidgets = (data: TPageWidget[]): TWidgetN[] => {
  const widgets = data?.reduce((acc: TWidgetN[], widget) => {
    const widgetName = formatWidgetName(widget.__typename);

    if (!widgetName) {
      return acc;
    }
    const formaterName = `normalize${widgetName}`;

    const widgetNormalizer = normalizeWidgetsList?.[formaterName];

    if (!widgetNormalizer) {
      console.error(`Normalize for ${widgetName} not exist!`);
      return acc;
    }

    return acc.concat(widgetNormalizer(widget));
  }, []);

  return widgets;
};
