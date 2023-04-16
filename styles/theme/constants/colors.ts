import { alpha, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    darken: string;
    lighten: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    accent: string;
  }
  interface PaletteOptions {
    accent: PaletteColorOptions;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    accent: true;
  }
}
declare module "@mui/material/LinearProgress" {
  interface LinearProgressPropsColorOverrides {
    accent: true;
  }
}

export const PRIMARY = {
  light: "#e63b77",
  main: "#E00B55",
  dark: "#9c073b",
};
// TODO: define what is secondary
export const SECONDARY = {
  light: "#44474a",
  main: "#16191D",
  dark: "#0f1114",
};

export const ACCENT = {
  light: alpha("#F8DF5E", 0.2),
  main: "#F8DF5E",
  dark: "#D3B304",
};

export const INFO = {
  light: alpha("#43ABFB", 0.2),
  main: "#43ABFB",
  dark: "#43ABFB",
};

export const ERROR = {
  light: alpha("#DC3F47", 0.2),
  main: "#DC3F47",
  dark: "#F96067",
};

export const SUCCESS = {
  light: alpha("#2AAB74", 0.2),
  main: "#2AAB74",
  dark: "#40DD9A",
};

export const WARNING = {
  light: alpha("#F78B31", 0.2),
  main: "#F78B31",
  dark: "#F78B31",
};

export const GREY = {
  light: "#999999",
  main: "#808080",
  dark: "#595959",
  A100: "#FFFFFF",
  A200: "#98A6B9",
  A400: "#515B68",
  A700: "#1A1E23",
};
