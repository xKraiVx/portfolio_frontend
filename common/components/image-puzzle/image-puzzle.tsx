import { ImageNormalized } from "@common/types/general"
import { Box, SxProps, Theme } from "@mui/material";
import { FunctionComponent, useEffect, useRef, useState } from "react"
import { NextImage } from "common/components/next-image/next-image";
import { imagePuzzleStyles } from "./image-puzzle.theme";

interface Props {
    image: ImageNormalized;
    sx?: SxProps<Theme>;
}

const cols = 5;

export const ImagePuzzle: FunctionComponent<Props> = ({ image, sx }) => {
    const styles = imagePuzzleStyles();
    const root = useRef<HTMLDivElement>();
    const [imageWrapperSize, setImageWrapperSize] = useState<{
        w: null | number,
        h: null | number
    }>({
        w: null,
        h: null
    })

    const { width, height } = image || {};

    useEffect(() => {
        const w = root.current.offsetWidth;
        const h = root.current.offsetHeight;

        const isPortrait = (asp) => asp > 1 ? true : false;
        const getAproximatelySize = (value, count) => Math.ceil(value / count / 10) * 10 * count;
        const getValueDividedOnTwo = (value) => value - value % 2;

        const aspectRatio = height / width;

        const isImagePortrait = isPortrait(aspectRatio);

        if (!isImagePortrait) {
            return setImageWrapperSize({
                w: getValueDividedOnTwo(Math.ceil(getAproximatelySize(h, cols) / aspectRatio)),
                h: Math.ceil(getAproximatelySize(h, cols))
            })
        }

        setImageWrapperSize({
            w: Math.ceil(getAproximatelySize(w, cols)),
            h: getValueDividedOnTwo(Math.ceil(getAproximatelySize(w, cols) * aspectRatio))
        });

    }, [])

    const { url } = image
    return (
        <Box ref={root} sx={{ ...styles.root, ...sx }}>
            <Box
                sx={styles.images}
                style={{
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    width: !!imageWrapperSize.w ? imageWrapperSize.w : '100%',
                    height: !!imageWrapperSize.h ? imageWrapperSize.h : '100%',
                }}
            >

                {[...Array(cols * cols).fill(1)].map((item, idx) => {

                    const imageChunkH = Math.ceil(imageWrapperSize.h / cols);
                    const imageChunkW = Math.ceil(imageWrapperSize.w / cols);

                    const leftOffset = (idx - Math.floor(idx / cols) * cols) * imageChunkW;
                    const topOffset = Math.floor(idx / cols) * imageChunkH;

                    return (
                        <Box key={idx} sx={styles.image_wrapper}>
                            <Box
                                sx={{
                                    ...styles.image,
                                    backgroundImage: `url(${process.env.NEXT_PUBLIC_BACK_URL + url})`
                                }}
                                style={{
                                    width: !!imageWrapperSize.w ? imageWrapperSize.w : '100%',
                                    height: !!imageWrapperSize.h ? imageWrapperSize.h : '100%',
                                    backgroundPosition: `-${leftOffset}px -${topOffset}px`
                                }}
                            />
                        </Box>
                    )

                })}
                {/* <Box sx={styles.image_wrapper}>
                    <Box
                        sx={{
                            ...styles.image,
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACK_URL + url})`
                        }}
                        style={{
                            width: !!imageWrapperSize.w ? imageWrapperSize.w : '100%',
                            height: !!imageWrapperSize.h ? imageWrapperSize.h : '100%',
                            backgroundPosition: `-0% 0%`
                        }}
                    />
                </Box>
                <Box sx={styles.image_wrapper}>
                    <Box
                        sx={{
                            ...styles.image,
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACK_URL + url})`
                        }}
                        style={{
                            width: !!imageWrapperSize.w ? imageWrapperSize.w : '100%',
                            height: !!imageWrapperSize.h ? imageWrapperSize.h : '100%',
                            backgroundPosition: `-${imageWrapperSize.w / 2}px 0`
                        }}
                    />
                </Box>
                <Box sx={styles.image_wrapper}>
                    <Box
                        sx={{
                            ...styles.image,
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACK_URL + url})`
                        }}
                        style={{
                            width: !!imageWrapperSize.w ? imageWrapperSize.w : '100%',
                            height: !!imageWrapperSize.h ? imageWrapperSize.h : '100%',
                            backgroundPosition: `-0% -${imageWrapperSize.h / 2}px`
                        }}
                    />
                </Box>
                <Box sx={styles.image_wrapper}>
                    <Box
                        sx={{
                            ...styles.image,
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACK_URL + url})`
                        }}
                        style={{
                            width: !!imageWrapperSize.w ? imageWrapperSize.w : '100%',
                            height: !!imageWrapperSize.h ? imageWrapperSize.h : '100%',
                            backgroundPosition: `-${imageWrapperSize.w / 2}px -${imageWrapperSize.h / 2}px`
                        }}
                    />
                </Box> */}

            </Box>
        </Box>
    )
}

{/* <NextImage media={image} objectFit="cover" /> */ }
