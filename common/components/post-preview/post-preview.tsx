import { IPostPreviewN } from "@cms/normalized-types/collection-types/post-normalized.type";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { NextImage } from "../next-image/next-image";
import { TextEditor } from "../text-editor/text-editor";

interface Props {
  postData: IPostPreviewN;
  sx?: SxProps;
}

export const PostPreview = ({ postData, sx }: Props) => {
  const { title, description, slug, featuredImage } = postData;
  const { url, alternativeText, width, height } = featuredImage || {};
  return (
    <Box sx={sx}>
      <NextLink href={`/blog/${slug}`}>
        <a>
          <Stack>
            <Typography variant="h4">{title}</Typography>
            <Box>
              <NextImage
                src={url}
                alt={alternativeText}
                width={width}
                height={height}
              />
              <TextEditor data={description} />
            </Box>
          </Stack>
        </a>
      </NextLink>
    </Box>
  );
};
