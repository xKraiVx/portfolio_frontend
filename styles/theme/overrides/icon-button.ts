import { useDeviceQuery } from "@common/hooks/use-device-query";
import { alpha, Components, Theme } from "@mui/material";

export default function IconButton(theme: Theme): Components {
  const { isMobile, isTablet } = useDeviceQuery();

  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          position: "relative",
          boxShadow: `inset ${theme.spacing(1 / 4, 1 / 4, 1 / 2)} ${
            theme.palette.secondary.dark
          }, inset ${theme.spacing(-1 / 8, -1 / 8, 1 / 2)} ${
            theme.palette.primary.main
          }`,
          "&:hover": {
            "&:before, >svg": {
              transform: "scale(0.8)",
              background: theme.palette.grey[800],
              color: theme.palette.primary.light,
            },
          },
          "&:before": {
            content: '""',
            position: "absolute",
            top: -1,
            left: -1,
            width: "105%",
            height: "105%",
            background: theme.palette.secondary.light,
            transition: "all .3s ease-out",
            borderRadius: "50%",
          },
          ">*, svg": {
            position: "relative",
            transition: "all .3s ease",
          },
          "> svg": {
            zIndex: 1,
          },
        },
      },
    },
  };
}
