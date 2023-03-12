import { IPostsPreviewsN } from "@cms/normalized-types/collection-types/post-normalized.type";
import { PostPreview } from "@common/components/post-preview/post-preview";
import { UiPagination } from "@common/components/ui-pagination/ui-pagination";
import { Box, Pagination, Stack, SxProps } from "@mui/material";

interface Props {
  postsData: IPostsPreviewsN;
  currentPage?: number;
  sx?: SxProps;
}

const PostsList = ({ postsData, sx, currentPage }: Props) => {
  const { postsPreviews, pagination } = postsData || {};
  return (
    <Box sx={sx}>
      <Stack sx={{ pt: 15 }}>
        {postsPreviews.map((post) => (
          <PostPreview sx={{ width: "50%" }} key={post.slug} postData={post} />
        ))}
      </Stack>
      <UiPagination
        route="/blog"
        paginationData={pagination}
        currentPage={currentPage}
      />
    </Box>
  );
};

export default PostsList;
