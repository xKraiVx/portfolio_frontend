import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import { HeaderNormalized } from '@common/types/header';

interface Props {
    data: HeaderNormalized,
}

export const BurgerMenu: FunctionComponent<Props> = ({ data }) => {
    const { navigation } = data;

    return (
        <Box role="presentation" >
            <List>
                {navigation.map((nav, idx) => {

                    const { href, text } = nav;

                    return (
                        <ListItem button key={idx}>
                            <Link href={href}>
                                <a className="cursor-active">
                                    <ListItemText primary={text} />
                                </a>
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );
}
