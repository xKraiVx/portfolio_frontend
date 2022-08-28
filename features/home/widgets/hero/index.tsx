import { HomePWHeroNormalized } from "@common/types/home-page"
import { Box, Container, Typography, useTheme } from "@mui/material";
import { FunctionComponent, useEffect } from "react"
import { CanvasGallery } from "./canvas-gallery";
import { heroStyles } from "./hero.theme";


interface Props {
    widgetData: HomePWHeroNormalized
}


const Hero: FunctionComponent<Props> = ({ widgetData }) => {
    const theme = useTheme();
    const styles = heroStyles(theme);
    console.log(widgetData);
    
    return (
        <Box component="section" sx={styles.root}>
            <Container>
                <Box sx={styles.title}>
                    <Typography variant="h1" sx={styles.title}>
                    </Typography>
                    <Typography
                        variant="h1"
                        component="span"
                        sx={styles.shadow}
                    >
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero