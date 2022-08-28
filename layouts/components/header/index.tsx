import { FunctionComponent } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { headerStyles } from './header.theme';
import { Container, Stack, useTheme, IconButton, Box } from '@mui/material';
import { HeaderNormalized } from '@common/types/header';
import { Navigation } from '@common/components/navigation/navigation';
import { Logo } from '@common/components/logo/logo';

interface Props {
    title: string,
    data: HeaderNormalized
}


export const Header: FunctionComponent<Props> = ({ title, data, }) => {
    const theme = useTheme();
    const styles = headerStyles(theme);

    const { navigation } = data;

    return (
        <Box sx={styles.root}>
            <Container maxWidth={false} disableGutters>
                <Box
                    sx={styles.content}
                >
                    <Logo />
                    <Navigation data={navigation} />
                    <Stack justifyContent="center" alignItems="flex-end">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MoreHorizIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
