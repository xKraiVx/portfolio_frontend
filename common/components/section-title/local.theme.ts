import { Theme, alpha } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  root: {
    color: alpha(theme.palette.secondary.light, 0.5),
    textShadow: `${theme.spacing(1 / 4, 1 / 4, 1 / 4)} ${
      theme.palette.secondary.dark
    }`,
  },
});
