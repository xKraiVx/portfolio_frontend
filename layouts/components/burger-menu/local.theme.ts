import { Theme } from "@mui/material";

export const localTheme = (theme: Theme, isOpen: boolean) => ({
  root: {
    position: "relative",
  },
  button: {
    "&:after": {
      content: '""',
      position: "absolute",
      borderRadius: "50%",
      top: "50%",
      left: "50%",
      width: isOpen ? "20vw" : "100%",
      height: isOpen ? "20vw" : "100%",
      transform: isOpen
        ? "translate(-50%, -50%) scale(25)"
        : "translate(-50%, -50%)",
      transition: "all 1s ease",
      background: theme.palette.secondary.light,
      border: `${theme.spacing(1)} solid ${theme.palette.secondary.light}`,
      boxShadow: `inset ${theme.spacing(1 / 4, 1 / 4, 1 / 2)} ${
        theme.palette.secondary.dark
      }, inset ${theme.spacing(-1 / 8, -1 / 8, 1 / 2)} ${
        theme.palette.primary.main
      }`,
      zIndex: -1,
      [theme.breakpoints.down("md")]: {
        width: isOpen ? "20vh" : "100%",
        height: isOpen ? "20vh" : "100%",
      },
    },
  },
  menu: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    pointerEvents: isOpen ? "auto" : "none",
  },
  overlay: {},
});
