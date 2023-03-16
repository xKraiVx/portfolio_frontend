import { alpha, Components, Theme } from "@mui/material";

export default function IconButton(theme: Theme): Components {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
