import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { breakpoints } from "./constants/breakpoints";

import { overrides } from "./overrides";

const generateTheme = (): Theme => {
  const theme = createTheme({
    palette,
    typography,
    breakpoints: {
      values: breakpoints,
    },
    shape: {
      borderRadius: 18,
    },
  });
  theme.components = overrides(theme);
  return theme;
};

export default generateTheme;
