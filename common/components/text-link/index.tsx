import { Link, useTheme } from "@mui/material";
import NextLink from "next/link";

import { css } from "@emotion/css";
import { textShadowGlitch } from "@common/keyframes/textShadowGlitch";
import { localTheme } from "./local.theme";
import { PropsWithRef, useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface TextLinkProps extends PropsWithRef<any> {
  href: string;
  text: string;
}

export const TextLink = ({ href, text }: TextLinkProps) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const link = useRef(null);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      link.current,
      {},
      {
        scrollTrigger: {
          trigger: link.current,
          onEnter: (e) => {
            setAnimateButton(true);
          },
          onLeave: (e) => {
            setAnimateButton(false);
          },
          onEnterBack: (e) => {
            setAnimateButton(true);
          },
          onLeaveBack: (e) => {
            setAnimateButton(false);
          },
        },
      }
    );
  }, []);

  if (!href || !text) {
    console.error('TextLink component have no "link" or "text" data!');
    return null;
  }

  return (
    <NextLink href={href}>
      <Link
        ref={link}
        className={
          animateButton
            ? css`
                animation: ${textShadowGlitch(theme)} 1s 1s ease forwards;
              `
            : ""
        }
        sx={styles.root}
      >
        {text}
      </Link>
    </NextLink>
  );
};
