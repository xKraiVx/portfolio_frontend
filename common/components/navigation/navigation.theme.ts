import { Theme } from "@mui/material";

export const navigationStyles = (theme: Theme) => ({
    root: {
        m: '0 auto'
    },
    disabled: {
        opacity: .5
    },
    item: {
        mx: 3
    },
    link: {
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '1px',
            background: theme.palette.primary.contrastText,
            transform: 'scale(1.5) translate(0, 10px)',
            opacity: 0,
            transition: 'all .3s'
        },
        '&:hover': {
            '&:before': {
                opacity: 1,
                transform: 'scale(1) translate(0, 0)'
            },
        }
    }
})