import { Box, IconButton, Stack, useTheme } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import { subMenuStyles } from "./sub-menu.theme";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import { homePageHooks } from "api/hooks/home-page.api-hooks";

const locales = {
    EN: 'en',
    UA: 'uk-UA'
}

interface Props {
    toggleTheme: React.MouseEventHandler<HTMLAnchorElement>;
}

export const SubMenu: FunctionComponent<Props> = ({ toggleTheme }) => {
    const theme = useTheme();
    const styles = subMenuStyles(theme);
    const router = useRouter()
    const { pathname, asPath, query } = router;

    const [mode, setMode] = useState<'dark' | 'light'>('dark')

    const handleToggleMode = (e) => {
        toggleTheme(e);
        if (mode === 'light') {
            return setMode('dark');
        }
        return setMode('light');
    }
    const handleToggleLocalization = () => {
        if (router.locale === locales.EN) {
            router.push({ pathname, query }, asPath, { locale: locales.UA })
            return;
        }
        router.push({ pathname, query }, asPath, { locale: locales.EN })
    }

    const testHomeQuery = homePageHooks.useGetHomePageQuery(locales.UA);
    console.log(testHomeQuery);


    return (
        <Box sx={styles.root}>
            <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
            >
                <MoreHorizIcon />
            </IconButton>
            <Stack sx={styles.menu} className="menu">
                <IconButton
                    size="small"
                    color="inherit"
                    aria-label="menu"
                    sx={styles.button}
                    onClick={handleToggleLocalization}
                >
                    {router.locale === locales.EN ? 'US' : 'UA'}
                </IconButton>
                <IconButton
                    size="small"
                    color="inherit"
                    aria-label="menu"
                    sx={styles.button}
                    onClick={handleToggleMode}
                >
                    {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Stack>
        </Box>
    )
}