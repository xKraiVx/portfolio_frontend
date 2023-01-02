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
import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";

interface Props {
  data?: ILinkComponentN[];
}

export const Navigation = ({ data }: Props): JSX.Element => {
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
                  className="cursor-active"
                  sx={styles.link}
                  underline="none"
                >
                  <ListItemText primary={text} />
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
