import { IPostPreviewN } from "@cms/normalized-types/collection-types/post-normalized.type";
import { TextEditor } from "@common/components/text-editor/text-editor";
import { TextLink } from "@common/components/text-link";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

interface BlockListProps {
  posts: IPostPreviewN[];
}

export const BlockList = ({ posts }: BlockListProps): JSX.Element => {
  if (!posts?.length) return null;

  return (
    <Container>
      <Stack gap={2}>
        {posts.map((post) => {
          const { title, featuredImage, description, slug } = post;

          const url = process.env.NEXT_PUBLIC_BACK_URL + featuredImage.url;
          return (
            <Card key={slug}>
              <CardHeader title={title} />
              <CardMedia
                component="img"
                height="194"
                image={url}
                alt={featuredImage.alternativeText}
              />
              <CardContent>
                <TextEditor data={description} />
              </CardContent>
              <CardActions>
                <TextLink text={"View post"} href={`/${slug}`} animate={true} />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
};
