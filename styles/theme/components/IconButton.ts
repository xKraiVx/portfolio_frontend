import { alpha, Theme } from "@mui/material";

export const IconButton = (theme: Theme) => ({
    MuiIconButton: {
        styleOverrides: {
            root: {
                border: `1px solid ${theme.palette.secondary.light}`,
                transition: 'all .3s',
                '&:hover': {
                    background: alpha(theme.palette.secondary.light, 0.2)
                }
            },
        },
    },
})