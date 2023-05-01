import { Theme } from "@mui/material";

export const localTheme = (theme: Theme) => ({
  root: {
    p: 1,
    cursor: "pointer",
    boxShadow: `inset ${theme.spacing(1 / 2, 1 / 2, 1 / 2)} ${
      theme.palette.secondary.dark
    }, inset ${theme.spacing(-1 / 4, -1 / 4, 1 / 2)} ${
      theme.palette.primary.main
    }`,
    borderRadius: theme.spacing(3),
    "&:hover": {
      "&:before, >*": {
        transform: "scale(0.9)",
      },
      "&:before": {
        background: theme.palette.grey[800],
      },
      ".logo": {
        color: theme.palette.primary.light,
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: -1,
      left: -1,
      width: "103%",
      height: "103%",
      background: theme.palette.secondary.light,
      transition: "all .3s ease-out",
      borderRadius: theme.spacing(3),
    },
    ">*, svg": {
      position: "relative",
      transition: "all .3s ease",
    },
  },
  link: {
    display: "inline-block",
    transition: "transform .3s ease",
  },
  logo_wrapper: {
    position: "relative",
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    svg: {
      width: "100%",
      height: "100%",
    },
  },
  word: {
    lineHeight: "1rem",
    ":first-letter": {
      fontWeight: 700,
    },
    "&:nth-last-of-type(2)": {
      transform: "translateX(5px)",
      fontWight: 700,
    },
  },
});
