import { Theme, alpha } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  root: {
    display: "inline-block",
    color: alpha(theme.palette.secondary.light, 0.5),
    textAlign: "center",
    cursor: "pointer",
    textShadow: `${theme.spacing(1 / 4, 1 / 4, 1 / 4)} ${
      theme.palette.secondary.dark
    }`,
    transition: "transform .3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});
