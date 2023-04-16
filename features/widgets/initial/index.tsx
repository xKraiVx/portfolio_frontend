import { IInitialN } from "@cms/normalized-types/widgets/global-widgets/initial-normalized.type";
import { NextImage } from "@common/components/next-image/next-image";
import { Box, Container, Typography } from "@mui/material";

interface Props {
  data: IInitialN;
}

export const Initial = ({ data }: Props) => {
  const { title, background } = data,
    { url, width, height, alternativeText } = background;
  return (
    <Box component="section" sx={{ minHeight: "100vh", paddingTop: 15 }}>
      <Container>
        <Typography variant="h3">{title}</Typography>
        <NextImage
          src={url}
          width={width}
          height={height}
          alt={alternativeText}
        />
      </Container>
    </Box>
  );
};
