import { Components, Theme } from "@mui/material";

export default function Container(theme: Theme): Components {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "0 40px",
          [theme.breakpoints.down("lg")]: {
            padding: "0 24px",
          },
          [theme.breakpoints.down("sm")]: {
            padding: "0 16px",
          },
        },
      },
    },
  };
}
