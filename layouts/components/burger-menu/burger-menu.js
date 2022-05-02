import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/MoveToInbox';

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
