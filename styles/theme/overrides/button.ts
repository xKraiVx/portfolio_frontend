import { useDeviceQuery } from "@common/hooks/use-device-query";
import { pxToRem } from "@common/utils/font.utils";
import { alpha, Components, Theme } from "@mui/material";

export default function Button(theme: Theme): Components {
  const { isMobile, isTablet } = useDeviceQuery();

  return {
    MuiButton: {
      styleOverrides: {
        text: {
          position: "relative",
          fontSize: pxToRem(24),
          lineHeight: 32 / 24,
          fontWeight: 700,
          boxShadow: `inset ${theme.spacing(1 / 2, 1 / 2, 1)} ${
            theme.palette.secondary.dark
          }, inset ${theme.spacing(-1 / 8, -1 / 8, 1 / 2)} ${
            theme.palette.primary.main
          }`,
          color: theme.palette.text.primary,
          "&:hover, &:focus": {
            "> *": {
              transform: "scale(0.8)",
              color: theme.palette.primary.light,
            },
            "&:before": {
              background: theme.palette.grey[800],
              transform: "scale(0.92, 0.8)",
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
            borderRadius: theme.spacing(2),
          },
          ">*": {
            position: "relative",
            transition: "all .3s ease",
            zIndex: 1,
          },
        },
      },
    },
  };
}
