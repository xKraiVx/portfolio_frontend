import { ImageNormalized } from "@common/types/general"
import { Box, SxProps, Theme } from "@mui/material";
import { FunctionComponent } from "react"
import { NextImage } from "common/components/next-image/next-image";
import { imagePuzzleStyles } from "./image-puzzle.theme";

interface Props {
    image: ImageNormalized;
    sx?: SxProps<Theme>;
}

const cols = 6;
const rows = 4;

export const ImagePuzzle: FunctionComponent<Props> = ({ image, sx }) => {
    const styles = imagePuzzleStyles();
    return (
        <Box sx={{ ...styles.root, ...sx }}>
            <Box
                sx={styles.images}
                style={{ gridTemplateColumns: `repeat(${6}, 1fr)` }}
            >
                {[...Array(cols * rows).fill(1)].map((item, idx) => (
                    <Box sx={styles.image_wrapper} key={`image_${idx}`}>
                        <NextImage media={image} objectFit="cover" />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}