import { Box, Container, Stack, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";
import { TextLink } from "@common/components/text-link";
import { SectionTitle } from "@common/components/section-title";
import { IChosenPostsN } from "@cms/normalized-types/widgets/global-widgets/chosen-posts-normalized.type";
import { BlockList } from "./block-list";

interface Props {
  data: IChosenPostsN;
}

export const ChosenPosts = ({ data }: Props) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const { title, link, navigation_id, linkText, posts, type } = data;

  return (
    <Box component="section" sx={styles.root} id={navigation_id.identificator}>
      <Container>
        <Stack alignItems="center">
          <SectionTitle>{title}</SectionTitle>
          <BlockList posts={posts} />
          <TextLink text={linkText} href={link} animate={true} />
        </Stack>
      </Container>
    </Box>
  );
};
