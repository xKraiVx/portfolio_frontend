import { Box, Button, Container, Stack, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";
import { SectionTitle } from "@common/components/section-title";
import { IGalleryN } from "@cms/normalized-types/widgets/global-widgets/gallery-normalized.type";
import { HoneycombsList } from "./components/honeycombs-list";
import { useScreenMediaQuery } from "@common/hooks/use-screen-media-query";

interface Props {
  data: IGalleryN;
}

const PAGE_SIZE = 20;
const COUNT_PER_ROW = 10;
const PAGE_SIZE_MOBILE = 10;
const COUNT_PER_ROW_MOBILE = 5;

export const Gallery = ({ data }: Props) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const { title, navigation_id, images, type } = data;

  const { isLessThan1024, isLessThan480 } = useScreenMediaQuery();

  return (
    <Box component="section" sx={styles.root} id={navigation_id.identificator}>
      <Container>
        <Stack alignItems="center">
          <SectionTitle sx={styles.title}>{title}</SectionTitle>
        </Stack>
      </Container>
      <Box sx={styles.gallery_wrapper}>
        {isLessThan480 ? (
          <HoneycombsList images={images} pageSize={6} countPerRow={3} />
        ) : isLessThan1024 ? (
          <HoneycombsList
            images={images}
            pageSize={PAGE_SIZE_MOBILE}
            countPerRow={COUNT_PER_ROW_MOBILE}
          />
        ) : (
          <HoneycombsList
            images={images}
            pageSize={PAGE_SIZE}
            countPerRow={COUNT_PER_ROW}
          />
        )}
      </Box>
      <Box sx={styles.button}>
        {/* TODO(HIGHT): MAKE GLOBAL component CUSTOM BUTTON */}
        <Button>
          <Box>View more</Box>
        </Button>
      </Box>
    </Box>
  );
};
