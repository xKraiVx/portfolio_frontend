import { Theme, alpha } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  root: {
    minHeight: "100vh",
    pt: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: alpha(theme.palette.secondary.light, 0.5),
    textAlign: "center",
    textShadow: `${theme.spacing(1 / 4, 1 / 4, 1 / 4)} ${
      theme.palette.secondary.dark
    }`,
  },
  scroll_down: {
    mt: 8,
    "&:hover": {
      animationPlayState: "paused",
    },
  },
});
