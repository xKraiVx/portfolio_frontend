import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { TWidgetN } from "@cms/normalized-types/widgets/widget-normalized";
import { Box } from "@mui/material";
import { log } from "console";
import { widgetTemplates } from "@features/widgets";

interface Props {
  widgets: TWidgetN[];
}

export const PageBuilder: ComponentType<Props> = ({ widgets }) => {
  if (!widgets) return null;

  return (
    <Box component="main">
      {widgets.map((widget, key) => {
        const template = widget?.template;

        if (!template) {
          return null;
        }

        const DynamicTemplate = widgetTemplates[template];

        return (
          <DynamicTemplate key={key} data={widget} widgets={widgets} id={key} />
        );
      })}
    </Box>
  );
};
