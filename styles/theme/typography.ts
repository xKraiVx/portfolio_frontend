import { pxToRem } from "@common/utils/font.utils";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    bodyL: React.CSSProperties;
    bodyXl: React.CSSProperties;
    subtitle3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyL?: React.CSSProperties;
    bodyXl?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyL: true;
    bodyXl: true;
    subtitle3: true;
  }
}

const BASE_FONT = "'Blogger sans', sans-serif";

export const typography: TypographyOptions = {
  fontFamily: BASE_FONT,
  h3: {
    fontSize: pxToRem(48),
    lineHeight: 58 / 48,
    fontWeight: 300,
  },
  h4: {
    fontSize: pxToRem(40),
    lineHeight: 52 / 40,
    fontWeight: 500,
  },

  h5: {
    fontSize: pxToRem(32),
    lineHeight: 40 / 32,
    fontWeight: 600,
  },
  h6: {
    fontSize: pxToRem(24),
    lineHeight: 32 / 24,
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: pxToRem(32),
    lineHeight: 50 / 32,
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: pxToRem(36),
    lineHeight: 40 / 36,
    fontWeight: 600,
  },
  body1: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 400,
  },
  body2: {
    fontSize: pxToRem(16),
    lineHeight: 24 / 16,
    fontWeight: 600,
  },
  caption: {
    fontSize: pxToRem(14),
    lineHeight: 20 / 14,
    fontWeight: 400,
  },
  button: {
    fontSize: pxToRem(24),
    lineHeight: 32 / 24,
    fontWeight: 700,
    textTransform: "none" as React.CSSProperties["textTransform"],
  },
};
