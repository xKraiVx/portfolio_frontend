import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { BurgerIcon, CloseIcon } from "@styles/theme/icons";

import { localTheme } from "./local.theme";
import { useRouter } from "next/router";
import { ELocalization } from "@cms/types/general/enums/localization.enum";
import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";
import { BurgerMenuNavigation } from "./burger-menu-navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const locales = {
  EN: ELocalization.EN,
  UA: ELocalization.UA,
};

export interface IBurgerMenuButtonProperties {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface BurgerMenuProps {
  data?: ILinkComponentN[];
}
export const BurgerMenu = ({ data }: BurgerMenuProps): JSX.Element => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const styles = localTheme(theme, isMenuOpen);
  const router = useRouter();
  const burgerButton = useRef(null);

  const { pathname, asPath, query } = router;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /*   const handleToggleLocalization = () => {
    if (router.locale === locales.EN) {
      router.push({ pathname, query }, asPath, { locale: locales.UA });
      return;
    }
    router.push({ pathname, query }, asPath, { locale: locales.EN });
  }; */

  return (
    <Box sx={styles.root}>
      <Stack sx={styles.menu} alignItems="center" justifyContent="center">
        <Box sx={styles.overlay} />
        <BurgerMenuNavigation data={data} isOpen={isMenuOpen} />
      </Stack>
      <IconButton
        size="large"
        color="inherit"
        aria-label="menu"
        onClick={toggleMenu}
        sx={styles.button}
        ref={burgerButton}
      >
        {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
      </IconButton>
      {/* <Stack sx={styles.menu} className="menu">
        <IconButton
          size="small"
          color="inherit"
          aria-label="menu"
          sx={styles.button}
          onClick={handleToggleLocalization}
        >
          {router.locale === locales.EN ? "US" : "UA"}
        </IconButton>
      </Stack> */}
    </Box>
  );
};
