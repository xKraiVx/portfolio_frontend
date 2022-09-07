import { Typography } from "@mui/material"
import { FunctionComponent } from "react"

export const Logo: FunctionComponent = () => {
    return (
        <Typography
            variant="h2"
            component="p"
            sx={{ fontWeight: 400 }}
        >
            <strong>K</strong>r<strong>AI</strong>v
        </Typography>
    )
}