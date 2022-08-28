import { alpha, Theme } from "@mui/material";

export const heroStyles = (theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        py: 10,
        width: '100vw',
        height: '100vh'
    },
    title: {
        position: 'relative',
        zIndex: 1
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        color: alpha(theme.palette.primary.contrastText, .1),
        transform: 'scale(4) translate(-25%, 50%)',
        zIndex: -1,
    }
})