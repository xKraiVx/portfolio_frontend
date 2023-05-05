import { Box, Button, ButtonProps } from "@mui/material";

export const UiButton = (props: ButtonProps) => {
  return (
    <Button {...props}>
      <Box component="span">{props.children}</Box>
    </Button>
  );
};
