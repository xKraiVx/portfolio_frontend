import { Theme } from "@mui/material";

export const navigationStyles = (theme: Theme) => ({
  root: {
    m: "0 auto",
  },
  disabled: {
    opacity: 0.5,
  },
  item: {
    mx: 3,
  },
  link: {
    position: "relative",
    cursor: "pointer",
    "&.current-link": {
      opacity: 0.7,
      pointerEvents: "none",
    },
  },
  line: {
    position: "absolute",
    bottom: 0,
    left: 0,
    "&:before": {
      content: '""',
      width: "100%",
    },
  },
});
