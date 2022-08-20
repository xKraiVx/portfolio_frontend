import { keyframes, Theme } from "@mui/material";

const rotateAnimation = keyframes`
    from {
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) scale(2) rotate(360deg);
    }
`;

export const customCursorStyles = (theme: Theme) => ({
    root: {
        position: 'absolute',
        width: '2rem',
        height: '2rem',
        pointerEvents: 'none',
        borderRadius: '50%',
        zIndex: 10000,
        border: `2px dotted ${theme.palette.primary.main}`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform .3s',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '50%',
            height: '50%',
            transform: 'translate(-50%, -50%)',
            background: theme.palette.secondary.light,
            opacity: 0.2,
            transition: 'opacity .3s',
            borderRadius: '50%',
        },
        '&.active': {
            transform: 'translate(-50%, -50%) scale(2)',
            animation: `${rotateAnimation} 1s infinite ease alternate`,
            '&:before': {
                opacity: 0.5,
                animation: `${rotateAnimation} 1s infinite ease alternate`
            }
        }
    },

})

