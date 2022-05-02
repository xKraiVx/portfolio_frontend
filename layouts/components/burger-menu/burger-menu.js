import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';

import Link from 'next/link';

export const BurgerMenu = ({ data, isOpenDrawer, onClose }) => {
    const { navigation } = data.attributes;

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
                    {navigation.map((nav, id) => {

                        const { href, text } = nav;

                        return (
                            <ListItem button key={id}>
                                <Link href={href}>
                                    <a>
                                        <ListItemText primary={text} />
                                    </a>
                                </Link>
                            </ListItem>
                        )
                    })}
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
                </List>
            </Box>
        </Drawer>
    );
}
