import { Theme } from "@mui/material";

export const Container = (theme: Theme) => ({
    MuiContainer: {
        styleOverrides: {
            root: {
                padding: '0 40px',
                [theme.breakpoints.down('lg')]: {
                    padding: '0 24px',
                },
                [theme.breakpoints.down('sm')]: {
                    padding: '0 16px',
                },
            },
        },
    },
})