import { FunctionComponent } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { headerStyles } from './header.theme';
import { useTheme } from '@mui/material';

interface Props {
    title: string,
    isOpenDrawer: boolean,
    toggleDrawer(): void
}


export const Header: FunctionComponent<Props> = ({ title, toggleDrawer = () => { } }) => {
    const theme = useTheme();
    const styles = headerStyles(theme);

    return (
        <Box sx={styles.root}>
            <AppBar sx={styles.navigation} className="navigation">
                <Toolbar>
                    {title && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                <Box sx={styles.sun} />
            </AppBar>
        </Box>
    );
}
