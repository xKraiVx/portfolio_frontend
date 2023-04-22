import { alpha, keyframes, Theme } from "@mui/material";

export const localStyles = (theme: Theme) => {
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      background: `linear-gradient(180deg, ${
        theme.palette.secondary.light
      } 0%, ${alpha(
        theme.palette.secondary.light,
        0.5
      )} 80%, rgba(0,0,0,0) 100%)`,
    },
    logo: {
      zIndex: 1,
    },
    content: {
      py: 3,
    },
  };
};
