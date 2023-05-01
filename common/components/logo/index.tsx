import { ILogoComponentN } from "@cms/normalized-types/components/logo-component-normalized";
import { Box, Link, Stack, SxProps, Typography, useTheme } from "@mui/material";
import NextLink from "next/link";
import { animateScroll } from "react-scroll";

import { localTheme } from "./local.theme";
import { useRouter } from "next/router";
import { LogoIcon } from "@styles/theme/icons";
import { useMemo } from "react";

interface Props {
  data: ILogoComponentN;
  sx?: SxProps;
}
export const Logo = ({ data, sx }: Props) => {
  const theme = useTheme();
  const { pathname } = useRouter();
  const styles = localTheme(theme);

  const isAnchor = useMemo(() => pathname === "/", [pathname]);

  const { image, href } = data;

  const handleAnchorClick = (e) => {
    e.preventDefault();
    animateScroll.scrollToTop();
  };

  return (
    <Box
      sx={{
        ...styles.root,
        ...sx,
        position: "relative",
      }}
    >
      <NextLink href={href}>
        <Link sx={styles.link} onClick={isAnchor && handleAnchorClick}>
          <Stack flexDirection="row" alignItems="center">
            <Box sx={styles.logo_wrapper}>
              <Box className="logo" sx={styles.logo}>
                {/* <UploadedSvg url={image.url} width={80} height={80} /> */}
                <LogoIcon />
              </Box>
            </Box>
            <Stack>
              <Typography sx={styles.word}>Another</Typography>
              <Typography sx={styles.word}>One</Typography>
              <Typography sx={styles.word}>Bett</Typography>
            </Stack>
          </Stack>
        </Link>
      </NextLink>
    </Box>
  );
};
