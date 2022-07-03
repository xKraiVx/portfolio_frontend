import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import { HeaderNormalized } from '@common/types/header';

interface Props {
    data: HeaderNormalized,
    isOpenDrawer: boolean,
    onClose(): void
}

export const BurgerMenu: FunctionComponent<Props> = ({ data, isOpenDrawer, onClose }) => {
    const { navigation } = data;

    return (
        <Drawer
            anchor='right'
            open={isOpenDrawer}
            onClose={onClose}
        >
            <Box
                role="presentation"
                onClick={onClose}
            >
                <List>
                    {navigation.map((nav, idx) => {

                        const { href, text } = nav;

                        return (
                            <ListItem button key={idx}>
                                <Link href={href}>
                                    <a>
                                        <ListItemText primary={text} />
                                    </a>
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Drawer>
    );
}
