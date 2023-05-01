import { Box, Container, Stack, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";
import { SectionTitle } from "@common/components/section-title";
import { IGalleryN } from "@cms/normalized-types/widgets/global-widgets/gallery-normalized.type";
import { HoneycombsList } from "./honeycombs-list";

interface Props {
  data: IGalleryN;
}

export const Gallery = ({ data }: Props) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const { title, navigation_id, images, type } = data;

  return (
    <Box component="section" sx={styles.root} id={navigation_id.identificator}>
      <Container>
        <Stack alignItems="center">
          <SectionTitle>{title}</SectionTitle>
        </Stack>
      </Container>
      <HoneycombsList images={images} />
    </Box>
  );
};
