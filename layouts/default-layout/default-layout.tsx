
import { FunctionComponent, ReactNode, useState } from 'react';
import { HeaderNormalized } from '@common/types/header';
import { BurgerMenu, Header } from '@layouts/components';
import { CustomCursor } from '@layouts/components/custom-cursor/custom-cursor';
import { Box } from '@mui/material';
import { defaultLayoutStyles } from './default-layout.theme';
import { Sounds } from '@layouts/components/sounds/sounds';

interface Props {
    headerData: HeaderNormalized;
    title: string;
    children: ReactNode | ReactNode[];
    toggleTheme: React.MouseEventHandler<HTMLAnchorElement>
}

export const DefaultLayout: FunctionComponent<Props> = ({ headerData, title, children, toggleTheme }) => {
    const styles = defaultLayoutStyles();

    return (
        <Box sx={styles.root}>
            <CustomCursor />
            {headerData && <Header title={title} data={headerData} toggleTheme={toggleTheme} />}
            <Box>
                {children}
            </Box>
            <Sounds />
        </Box>
    );
}
