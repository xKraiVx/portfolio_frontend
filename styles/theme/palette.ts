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
    contrastText: GREY[100],
  },
  info: {
    ...INFO,
    contrastText: GREY[100],
  },
  accent: {
    ...ACCENT,
    contrastText: GREY[100],
  },
  warning: {
    ...WARNING,
    contrastText: GREY[100],
  },
  error: {
    ...ERROR,
    contrastText: GREY[100],
  },
  success: {
    ...SUCCESS,
    contrastText: GREY[100],
  },
  grey: { ...GREY },
  divider: GREY[100],
  background: {
    paper: GREY[700],
    default: GREY[700],
    darken: GREY[900],
    lighten: GREY[600],
  },
  text: {
    primary: GREY[200],
    secondary: GREY[100],
    disabled: GREY[400],
  },
};
