import { HomePWHeroNormalized } from "@common/types/home-page";
import { Box, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { HeroSlider } from "./hero-slider";
import { heroStyles } from "./hero.theme";

interface Props {
  widgetData: HomePWHeroNormalized;
}

const Hero: FunctionComponent<Props> = ({ widgetData }) => {
  const theme = useTheme();
  const styles = heroStyles(theme);
  const slides = widgetData.slides;

  return (
    <Box component="section" sx={styles.root}>
      <HeroSlider slides={slides} />
    </Box>
  );
};

export default Hero;
