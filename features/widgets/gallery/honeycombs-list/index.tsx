import { TMediaN } from "@cms/normalized-types/general/media-normalized";
import { Box, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";
import { NextImage } from "@common/components/next-image/next-image";

interface HoneycombsListProps {
  images: TMediaN[];
}

export const HoneycombsList = ({
  images,
}: HoneycombsListProps): JSX.Element => {
  console.log(images);

  const theme = useTheme();
  const styles = localTheme(theme);

  return (
    <Box sx={styles.root}>
      <Box>
        {images.map((image) => {
          const { url, alternativeText, width, height } = image;
          return (
            <Box>
              <NextImage
                src={url}
                alt={alternativeText}
                width={width}
                height={height}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
