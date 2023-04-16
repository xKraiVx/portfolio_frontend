import { Components, Theme } from "@mui/material";

export default function Base(theme: Theme): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          boxSizing: "border-box",
          padding: 0,
          margin: 0,
          "::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        },
      },
    },
  };
}
