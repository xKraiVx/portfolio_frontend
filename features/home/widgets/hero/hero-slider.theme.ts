import { alpha, Theme } from "@mui/material";

export const heroSliderStyles = (theme: Theme) => ({
    slider: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    slide: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        '&.active': {
            '& .title': {
                transform: 'translate(0, 0)',
            },
            '& .shadow': {
                transform: 'translate(-10%, 0)',
            }
        }
    },
    slide_wrapper: {
        py: 10,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        transform: 'translate(-300%, 0)',
        transition: 'all 2s',
        transitionTimingFunction: theme.transitions.easing.easeOut,
        zIndex: 1
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: '15rem',
        color: alpha(theme.palette.primary.contrastText, .05),
        transform: 'translate(300%, 0)',
        transition: 'all 2s',
        transitionTimingFunction: theme.transitions.easing.easeOut,
        zIndex: -1,
    },
    puzzle: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -2,
        '&:before': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: alpha(theme.palette.primary.dark, .8),
            zIndex: 1
        } 
    }
})