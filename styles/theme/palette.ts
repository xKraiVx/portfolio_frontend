import { PaletteOptions } from "@mui/material";
import {
  ACCENT,
  ERROR,
  GREY,
  INFO,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  WARNING,
} from "./constants/colors";

export const palette: PaletteOptions = {
  primary: { ...PRIMARY, contrastText: GREY[100] },
  secondary: {
    ...SECONDARY,
    contrastText: GREY.light,
  },
  info: {
    ...INFO,
    contrastText: GREY.light,
  },
  accent: {
    ...ACCENT,
    contrastText: GREY.light,
  },
  warning: {
    ...WARNING,
    contrastText: GREY.light,
  },
  error: {
    ...ERROR,
    contrastText: GREY.light,
  },
  success: {
    ...SUCCESS,
    contrastText: GREY.light,
  },
  grey: { ...GREY },
  divider: GREY.light,
  background: {
    paper: SECONDARY.light,
    default: SECONDARY.light,
    darken: SECONDARY.light,
    lighten: SECONDARY.light,
  },
  text: {
    primary: SECONDARY.dark,
    secondary: SECONDARY.main,
    disabled: SECONDARY.light,
  },
};
