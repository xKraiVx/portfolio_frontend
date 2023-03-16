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
  light: alpha("#83577d", 0.2),
  main: "#642e5d",
  dark: "#462041",
};
// TODO: define what is secondary
export const SECONDARY = {
  light: alpha("#737ba2", 0.2),
  main: "#505a8b",
  dark: "#383e61",
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
  50: "#F7FBFF",
  100: "#FFFFFF",
  200: "#98A6B9",
  300: "#656E79",
  400: "#515B68",
  500: "#393F47",
  600: "#252A31",
  700: "#1A1E23",
  800: "#121418",
  900: "#14171C",
  A100: "#FFFFFF",
  A200: "#98A6B9",
  A400: "#515B68",
  A700: "#1A1E23",
};
