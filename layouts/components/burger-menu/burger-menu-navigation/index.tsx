import {
  Box,
  Button,
  Link,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";

import cn from "classnames";
import { motion } from "framer-motion";

interface BurgerMenuNavigationProps {
  data?: ILinkComponentN[];
  isOpen: boolean;
}

const variants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  closed: {
    opacity: 0,
  },
};

export const BurgerMenuNavigation = ({
  data,
  isOpen,
}: BurgerMenuNavigationProps): JSX.Element => {
  const { pathname } = useRouter();
  const theme = useTheme();

  if (!data) return null;

  return (
    <Stack alignItems="center" gap={3}>
      {data.map((nav, idx) => {
        const { href, text } = nav;

        return (
          <Box key={idx}>
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              {!!href ? (
                <NextLink href={href}>
                  <Button
                    sx={{ minWidth: theme.spacing(25) }}
                    size="large"
                    className={cn({ "current-link": pathname === href })}
                  >
                    <Box component="span">{text}</Box>
                  </Button>
                </NextLink>
              ) : (
                <Typography variant="body1" component="div" key={idx}>
                  {text}
                </Typography>
              )}
            </motion.div>
          </Box>
        );
      })}
    </Stack>
  );
};
