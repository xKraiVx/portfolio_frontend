import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { TWidgetN } from "@cms/normalized-types/page-widgets/widget-normalized";
import { Box } from "@mui/material";

interface Props {
  widgets: TWidgetN[];
}

export const PageBuilder: ComponentType<Props> = ({ widgets }) => {
  if (!widgets) return null;

  return (
    <Box component="main">
      {widgets.map((widget, key) => {
        const template = widget?.name;

        if (!template) {
          return null;
        }

        const DynamicTemplate: ComponentType<{ data: typeof widget }> = dynamic(
          () => import(`features/widgets/${template}/${template}.tsx`)
        );

        return <DynamicTemplate key={key} data={widget} />;
      })}
    </Box>
  );
};
