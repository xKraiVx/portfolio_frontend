import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
import { ReactElement, useEffect, useRef } from "react";

interface BlockListProps {
  posts: IPostPreviewN[];
}

gsap.registerPlugin(ScrollTrigger);

export const BlockList = ({ posts }: BlockListProps): JSX.Element => {
  const cardList = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardList.current.children;

    Array.from(cards).forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          scale: 0.5,
          y: 40,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            scrub: 1,
          },
          opacity: 1,
          scale: 1,
          y: 0,
        }
      );
    });
  }, []);

  if (!posts?.length) return null;

  return (
    <Container>
      <Stack gap={2} ref={cardList}>
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
