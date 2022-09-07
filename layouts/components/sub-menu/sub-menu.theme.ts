import { Theme } from "@mui/material";

export const subMenuStyles = (theme: Theme) => ({
    root: {
        position: 'relative',
        '&:hover': {
            '& .menu': {
                top: 40,
                opacity: 1,
                transform: 'translateX(-50%) scale(1)',
            }
        }
    },
    menu: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%) scale(0)',
        transition: 'all .3s',
        opacity: 0,
    },
    button: {
        mt: 4,
        width: 38,
        height: 38
    }
})
