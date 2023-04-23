import { ReactNode } from "react";
import { SxProps, Typography, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";

interface SectionTitleProps {
  variant?: "h1" | "h2" | "h3";
  textAlign?: "center" | "left" | "right";
  sx?: SxProps;
  children?: ReactNode;
}

export const SectionTitle = ({
  sx,
  variant = "h2",
  textAlign = "center",
  children,
}: SectionTitleProps): JSX.Element => {
  const theme = useTheme();
  const styles = localTheme(theme);
  return (
    <Typography
      textAlign={textAlign}
      sx={{ ...styles.root, ...sx }}
      variant={variant}
    >
      {children}
    </Typography>
  );
};
