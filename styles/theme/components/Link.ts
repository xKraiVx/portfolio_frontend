import { Theme } from "@mui/material";

export const Link = (theme: Theme) => ({
    MuiLink: {
        styleOverrides: {
            root: {
                color: theme.palette.primary.contrastText
            },
        },
    },
})