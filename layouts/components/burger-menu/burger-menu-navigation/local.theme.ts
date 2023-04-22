import { Theme } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  link: {
    minWidth: theme.spacing(25),
  },
  current_link: {
    pointerEvents: "none",
    color: theme.palette.primary.light,
    "&:before": {
      background: theme.palette.secondary.dark,
    },
  },
});
