import {
  Box,
  Link,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import { navigationStyles } from "./navigation.theme";
import { useRouter } from "next/router";

import cn from "classnames";
import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";
import { BrainIcon } from "@styles/custom-icons/brain-icon";

interface Props {
  data?: ILinkComponentN[];
}

export const Navigation = ({ data }: Props): JSX.Element => {
  const { pathname } = useRouter();
  const theme = useTheme();
  const styles = navigationStyles(theme);

  if (!data) {
    return <></>;
  }

  return (
    <Stack flexDirection="row" alignItems="center" sx={styles.root}>
      {data.map((nav, idx) => {
        const { href, text } = nav;

        return (
          <Box sx={styles.item} key={idx}>
            {!!href ? (
              <NextLink href={href}>
                <Link
                  className={cn({ "current-link": pathname === href })}
                  sx={styles.link}
                  underline="none"
                >
                  <ListItemText primary={text} />
                  <Box sx={styles.line} />
                </Link>
              </NextLink>
            ) : (
              <Typography
                variant="body1"
                component="div"
                sx={styles.disabled}
                key={idx}
              >
                <ListItemText primary={text} />
              </Typography>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};
