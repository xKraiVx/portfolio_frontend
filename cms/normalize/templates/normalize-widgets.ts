import { TWidgetN } from "@cms/normalized-types/page-widgets/widget-normalized";
import { TPageWidget } from "@cms/types/page-widgets/page-widget";
import { normalizeWidgetsList } from "../page-widgets";
//TODO: Fix any, rewrite on strapi

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const normalizeWidgets = (data: TPageWidget[]): TWidgetN[] => {
  const widgets = data?.reduce((acc: TWidgetN[], widget) => {
    const widgetName = capitalizeFirstLetter(widget.name);

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
