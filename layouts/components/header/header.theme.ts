import { keyframes, Theme } from "@mui/material";



export const headerStyles = (theme: Theme) => {

    return ({
        root: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100
        },
        content: {
            display: 'grid',
            gridTemplateColumns: '1fr 4fr 1fr',
            py: 3,
            width: '100%',
        }
    })
}