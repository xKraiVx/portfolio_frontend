import { HeaderNavigationItem } from "@common/types/header";
import { Box, Link, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react"
import NextLink from "next/link";
import { navigationStyles } from "./navigation.theme";
import cn from 'classnames';

interface Props {
    data: HeaderNavigationItem[]
}

export const Navigation: FunctionComponent<Props> = ({ data }) => {
    const theme = useTheme();
    const styles = navigationStyles(theme);
    return (
        <Stack flexDirection="row" alignItems="center" sx={styles.root}>
            {data.map((nav, idx) => {
                const { href, text } = nav;

                return (
                    <Box sx={styles.item} key={idx}>
                        {!!href ?
                            <NextLink href={href}>
                                <Link
                                    className='cursor-active'
                                    sx={styles.link}
                                    underline="none"
                                >
                                    <ListItemText primary={text} />
                                </Link>
                            </NextLink>
                            :
                            <Typography
                                variant="body1"
                                component="div"
                                sx={styles.disabled}
                                key={idx}
                            >
                                <ListItemText primary={text} />
                            </Typography>
                        }
                    </Box>
                )
            })}
        </Stack>
    )
}