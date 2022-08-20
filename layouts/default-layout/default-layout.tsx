
import { FunctionComponent, ReactNode, useState } from 'react';
import { HeaderNormalized } from '@common/types/header';
import { BurgerMenu, Header } from '@layouts/components';
import { CustomCursor } from '@layouts/components/custom-cursor/custom-cursor';
import { Box } from '@mui/material';
import { defaultLayoutStyles } from './default-layout.theme';

interface Props {
    headerData: HeaderNormalized,
    title: string,
    children: ReactNode | ReactNode[]
}

export const DefaultLayout: FunctionComponent<Props> = ({ headerData, title, children }) => {
    const styles = defaultLayoutStyles();

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => setOpenDrawer(prevState => !prevState);

    return (
        <Box sx={styles.root}>
            <CustomCursor />
            {headerData && <Header isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} title={title} />}
            <Box>
                {headerData && <BurgerMenu data={headerData} isOpenDrawer={openDrawer} onClose={toggleDrawer} />}
                {children}
            </Box>
        </Box>
    );
}
