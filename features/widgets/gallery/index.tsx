import { Box, Button, Container, Stack, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";
import { SectionTitle } from "@common/components/section-title";
import { IGalleryN } from "@cms/normalized-types/widgets/global-widgets/gallery-normalized.type";
import { HoneycombsList } from "./components/honeycombs-list";
import { useScreenMediaQuery } from "@common/hooks/use-screen-media-query";
import { UiButton } from "@common/components/ui-button";
import { useMemo, useState } from "react";

interface Props {
  data: IGalleryN;
}

const PAGE_SIZE = 20;
const COUNT_PER_ROW = 10;
const PAGE_SIZE_MOBILE = 6;
const COUNT_PER_ROW_MOBILE = 3;
const PAGE_SIZE_TABLET = 10;
const COUNT_PER_ROW_TABLET = 5;

export const Gallery = ({ data }: Props) => {
  const [page, setPage] = useState(1);
  const theme = useTheme();
  const styles = localTheme(theme);
  const { title, navigation_id, images, type } = data;

  const { isLessThan1024, isLessThan480 } = useScreenMediaQuery();

  const handleClickMore = () => {
    setPage(page + 1);
  };

  const pageData = useMemo(
    () =>
      isLessThan480
        ? {
            size: PAGE_SIZE_MOBILE + (page - 1) * COUNT_PER_ROW_MOBILE,
            perRow: COUNT_PER_ROW_MOBILE,
          }
        : isLessThan1024
        ? {
            size: PAGE_SIZE_TABLET + (page - 1) * COUNT_PER_ROW_TABLET,
            perRow: COUNT_PER_ROW_TABLET,
          }
        : {
            size: PAGE_SIZE + (page - 1) * COUNT_PER_ROW,
            perRow: COUNT_PER_ROW,
          },
    [isLessThan1024, isLessThan480, page]
  );

  const isViewMore = useMemo(
    () => pageData.size < images.length,
    [pageData, images]
  );

  return (
    <Box component="section" sx={styles.root} id={navigation_id.identificator}>
      <Container>
        <Stack alignItems="center">
          <SectionTitle sx={styles.title}>{title}</SectionTitle>
        </Stack>
      </Container>
      <Box sx={styles.gallery_wrapper}>
        <HoneycombsList
          images={images}
          pageSize={pageData.size}
          countPerRow={pageData.perRow}
        />
      </Box>
      {isViewMore && (
        <Box sx={styles.button}>
          <UiButton onClick={handleClickMore}>View All</UiButton>
        </Box>
      )}
    </Box>
  );
};
