import { Link, useTheme } from "@mui/material";
import NextLink from "next/link";

import { css } from "@emotion/css";
import { textShadowGlitch } from "@common/keyframes/textShadowGlitch";
import { localTheme } from "./local.theme";

interface TextLinkProps {
  href: string;
  text: string;
  animate?: boolean;
}

export const TextLink = ({ href, text, animate }: TextLinkProps) => {
  const theme = useTheme();
  const styles = localTheme(theme);

  if (!href || !text) {
    console.error('TextLink component have no "link" or "text" data!');
    return null;
  }

  return (
    <NextLink href={href}>
      <Link
        className={
          animate &&
          css`
            animation: ${textShadowGlitch(theme)} 1s 1s ease forwards;
          `
        }
        sx={styles.root}
      >
        {text}
      </Link>
    </NextLink>
  );
};
