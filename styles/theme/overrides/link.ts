import { Components, Theme } from "@mui/material";

export default function Link(theme: Theme): Components {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: theme.palette.text.primary,
        },
      },
    },
  };
}
