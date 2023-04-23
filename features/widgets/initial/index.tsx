import { IInitialN } from "@cms/normalized-types/widgets/global-widgets/initial-normalized.type";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { localTheme } from "./local.theme";
import { TextLink } from "@common/components/text-link";
import { WomenSignIcon } from "@styles/theme/icons";
import { css } from "@emotion/css";
import { bounceDown } from "@common/keyframes/bounceDown";
import { TWidgetN } from "@cms/normalized-types/widgets/widget-normalized";
import { SectionTitle } from "@common/components/section-title";

interface Props {
  data: IInitialN;
  widgets: TWidgetN[];
  id: number;
}

export const Initial = ({ data, widgets, id }: Props) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const { title, background, link, link_text, navigation_id } = data,
    { url, width, height, alternativeText } = background;

  const nextSectionIdentificator = widgets[id + 1]?.navigation_id.identificator;

  return (
    <Box component="section" sx={styles.root} id={navigation_id.identificator}>
      <Container>
        <Stack alignItems="center">
          <SectionTitle variant="h1">
            {title}
            <TextLink text={link_text} href={link} animate={true} />
          </SectionTitle>
          {nextSectionIdentificator && (
            <ScrollLink smooth={true} to={nextSectionIdentificator}>
              <IconButton
                className={css`
                  animation: ${bounceDown} 1s ease infinite alternate;
                `}
                size="large"
                sx={styles.scroll_down}
              >
                <WomenSignIcon />
              </IconButton>
            </ScrollLink>
          )}
        </Stack>

        {/* <NextImage
          src={url}
          width={width}
          height={height}
          alt={alternativeText}
        /> */}
      </Container>
    </Box>
  );
};
