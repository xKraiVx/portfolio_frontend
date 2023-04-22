import { pxToRem } from "@common/utils/font.utils";
import { Components, Theme } from "@mui/material";

export default function Typography(theme: Theme): Components {
  return {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: pxToRem(96),
          lineHeight: 116 / 96,
          fontWeight: 700,
          letterSpacing: 0,
          [theme.breakpoints.down("md")]: {
            fontSize: pxToRem(64),
            lineHeight: 77 / 64,
            fontWeight: 700,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: pxToRem(48),
            lineHeight: 58 / 48,
            fontWeight: 700,
          },
        },
        h2: {
          fontSize: pxToRem(64),
          lineHeight: 77 / 64,
          fontWeight: 700,
          [theme.breakpoints.down("md")]: {
            fontSize: pxToRem(48),
            lineHeight: 58 / 48,
            fontWeight: 700,
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: pxToRem(40),
            lineHeight: 52 / 40,
            fontWeight: 500,
          },
        },
      },
    },
  };
}
