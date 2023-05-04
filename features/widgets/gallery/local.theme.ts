import { Theme, alpha } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  root: {
    minHeight: "100vh",
    pt: 15,
  },
  title: {
    mb: 10,
  },
  gallery_wrapper: {
    position: "relative",
    overflow: "hidden",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      left: 0,
      width: "100%",
      height: theme.spacing(30),
      zIndex: 1,
      pointerEvents: "none",
    },
    "&:before": {
      top: 0,
      background: `linear-gradient(180deg, ${
        theme.palette.secondary.light
      } 0%, ${alpha(theme.palette.secondary.light, 0)} 100%)`,
    },
    "&:after": {
      bottom: 0,
      background: `linear-gradient(180deg, ${alpha(
        theme.palette.secondary.light,
        0
      )} 0%, ${theme.palette.secondary.light} 100%)`,
    },
  },
  button: {
    display: "flex",
    mt: 4,
    justifyContent: "center",
  },
});
