import { IMediaData } from "@cms/types/general/media";
import { useState } from "react";
import { localTheme } from "./local.theme";
import { Box, SxProps, useTheme } from "@mui/material";
import { NextImage } from "@common/components/next-image/next-image";
import { motion } from "framer-motion";

interface HoneycombProps {
  image: IMediaData;
  sx?: SxProps;
}

export const Honeycomb = ({ image, sx }: HoneycombProps) => {
  const theme = useTheme();
  const styles = localTheme(theme);
  const [isLoaded, setIsLoaded] = useState(false);
  const { url, alternativeText, width, height, hash } = image;

  const itemVariants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={itemVariants}>
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
    </motion.div>
  );
};
