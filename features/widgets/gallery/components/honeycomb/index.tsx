import { IMediaData } from "@cms/types/general/media";
import { useState } from "react";
import { localTheme } from "./local.theme";
import { Box, SxProps, useTheme } from "@mui/material";
import { NextImage } from "@common/components/next-image/next-image";

interface HoneycombProps {
  image: IMediaData;
  sx?: SxProps;
}

export const Honeycomb = ({ image, sx }: HoneycombProps) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const [isLoaded, setIsLoaded] = useState(false);
  const { url, alternativeText, width, height, hash } = image;

  return (
    <Box key={hash} sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.item_inner}>
        <Box
          sx={{
            ...styles.preloader,
            opacity: isLoaded ? 0 : 1,
          }}
        />
        <NextImage
          src={url}
          onLoad={(e) => {
            setIsLoaded(true);
          }}
          alt={alternativeText}
          width={width}
          height={height}
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};
