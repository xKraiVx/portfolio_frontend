import { keyframes, Theme } from "@mui/material";



export const headerStyles = (theme: Theme) => {

    const sunAnimation = keyframes`
    0% {
        box-shadow: 0px 0px 50px 30px ${theme.palette.background.default};
    }
    10% {
        box-shadow: 0px 0px 50px 50px ${theme.palette.background.default};
    }
    30% {
        box-shadow: 0px 0px 30px 40px ${theme.palette.background.default};
    }
    50% {
        box-shadow: 0px 0px 30px 40px ${theme.palette.background.default};
    }
    65% {
        box-shadow: 0px 0px 30px 20px ${theme.palette.background.default};
    }
    90% {
        box-shadow: 0px 0px 50px 50px ${theme.palette.background.default};
    }
    100% {
        box-shadow: 0px 0px 30px 20px ${theme.palette.background.default};
    }
`;

    return ({
        root: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: '60px',
            width: '100%',
            zIndex: 10,
            '&:hover': {
                '& .navigation': {
                    transform: 'translateY(0)'
                }
            }
        },
        navigation: {
            py: 2,
            pb: 80,
            boxShadow: 'unset',
            backgroundImage: theme.palette.primary.main,
            transform: 'translateY(-80%)',
            transition: 'transform .5s',
            transitionTimingFunction: theme.transitions.easing.easeInOut,
            overflow: 'hidden',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 100%)`,
                pointerEvents: 'none'
            }
        },
        sun: {
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '20vw',
            height: '20vw',
            background: theme.palette.background.default,
            boxShadow: `0px 0px 50px 20px ${theme.palette.background.default}`,
            transform: 'translate(-50%, 50%)',
            borderRadius: '50%',
            opacity: .4,
            transition: 'all .5s',
            transitions: theme.transitions.easing.easeIn,
            animation: `${sunAnimation} 5s infinite ease alternate`,
            '&:hover': {
                opacity: .7,
                transform: 'translate(-50%, 50%) scale(1.3)',
            }
        }
    })
}