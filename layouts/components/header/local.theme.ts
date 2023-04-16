import { keyframes, Theme } from "@mui/material";

export const localStyles = (theme: Theme) => {
  return {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 100,
    },
    logo: {
      zIndex: 1,
    },
    content: {
      py: 3,
    },
  };
};
