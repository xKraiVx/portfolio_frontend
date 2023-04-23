import { alpha, Theme } from "@mui/material";

export const localStyles = (theme: Theme) => {
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
      "&.hidden": {
        pointerEvents: "none",
        ">*, &:before": {
          transform: "translateY(-100%)",
        },
      },
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `linear-gradient(180deg, ${
          theme.palette.secondary.light
        } 0%, ${alpha(
          theme.palette.secondary.light,
          0.5
        )} 80%, rgba(0,0,0,0) 100%)`,
        transition: "transform .3s ease",
      },
    },
    logo: {
      zIndex: 1,
    },
    content: {
      py: 2,
      [theme.breakpoints.down("md")]: {
        py: 1,
      },
    },
    container: {
      transition: "transform .3s ease",
    },
  };
};
