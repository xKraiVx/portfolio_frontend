import { Theme, alpha } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  root: {
    cursor: "pointer",
    overflow: "hidden",
    "&:hover": {
      ">div": {
        opacity: 1,
        filter: "grayscale(0)",

        "> span": {
          transform: "scale(1.1)",
        },
      },
    },
  },

  item_inner: {
    height: "100%",
    filter: "grayscale(1)",
    opacity: 0.2,
    transition: "filter, opacity .3s ease",
    clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",

    "> span": {
      minHeight: "100%",
      transition: `transform .3s ease`,
      clipPath: "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
      background: alpha(theme.palette.secondary.light, 0.9),
    },
  },
  preloader: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black",
    transition: "opacity .3s ease",
    zIndex: 1,
  },
});
