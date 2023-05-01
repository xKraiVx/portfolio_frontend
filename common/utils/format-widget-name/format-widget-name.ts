import { EWidgetsGroup } from "@cms/types/general/enums/widgets-groups.enym";

export const formatWidgetName = (name: string): string => {
  const widgetGroups = Object.values(EWidgetsGroup);

  const currentWidgetGroup = widgetGroups.find((group) =>
    name?.includes(group)
  );
  if (!currentWidgetGroup) {
    return null;
  }

  return name.split(currentWidgetGroup)[1];
};
