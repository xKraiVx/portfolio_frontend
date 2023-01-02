import { IHeroN } from "@cms/normalized-types/page-widgets/hero-normalized";
import { Box, useTheme } from "@mui/material";
import { HeroSlider } from "./hero-slider";
import { heroStyles } from "./hero.theme";

interface Props {
  widgetData: IHeroN;
}

const Hero = ({ widgetData }: Props): JSX.Element => {
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
