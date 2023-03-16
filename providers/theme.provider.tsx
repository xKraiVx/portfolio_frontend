import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import generateTheme from "@styles/theme/theme";

interface Props {
  children?: ReactNode;
}

export const UiThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={generateTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
