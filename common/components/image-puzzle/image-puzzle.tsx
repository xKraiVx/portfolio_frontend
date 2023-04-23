import { Box, SxProps, Theme } from "@mui/material";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { imagePuzzleStyles } from "./image-puzzle.theme";
import cn from "classnames";
import { TMediaN } from "@cms/normalized-types/general/media-normalized";

interface Props {
  image: TMediaN;
  sx?: SxProps<Theme>;
  className?: string;
  cols?: number;
  randomAnimationDelay?: boolean;
}

export const ImagePuzzle: FunctionComponent<Props> = ({
  image,
  sx,
  className,
  cols = 5,
  randomAnimationDelay = true,
}) => {
  const styles = imagePuzzleStyles();
  const root = useRef<HTMLDivElement>();
  const [imageWrapperSize, setImageWrapperSize] = useState<{
    w: null | number;
    h: null | number;
  }>({
    w: null,
    h: null,
  });

  const { width, height } = image || {};

  const updateSize = () => {
    const w = root.current.offsetWidth;
    const h = root.current.offsetHeight;

    const getAproximatelySize = (value, count) =>
      Math.ceil(value / count / 10) * 10 * count;
    const getValueDividedOnTwo = (value) => value - (value % 2);

    const aspectRatioImage = height / width;
    const aspectRatioWrapper = h / w;

    const fitPuzzleTo = (v: "height" | "width"): void => {
      if (v === "height") {
        setImageWrapperSize({
          w: getValueDividedOnTwo(
            Math.ceil(getAproximatelySize(h, cols) / aspectRatioImage)
          ),
          h: Math.ceil(getAproximatelySize(h, cols)),
        });
        return;
      }
      setImageWrapperSize({
        w: Math.ceil(getAproximatelySize(w, cols)),
        h: getValueDividedOnTwo(
          Math.ceil(getAproximatelySize(w, cols) * aspectRatioImage)
        ),
      });
    };
    if (aspectRatioImage < aspectRatioWrapper) {
      return fitPuzzleTo("height");
    }
    fitPuzzleTo("width");
  };

  useEffect(() => {
    updateSize();

    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
    };
  }, []);

  const { url } = image;
  return (
    <Box
      ref={root}
      sx={{ ...styles.root, ...sx }}
      className={cn(className, "puzzle__root")}
    >
      <Box
        sx={styles.images}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          width: !!imageWrapperSize.w ? imageWrapperSize.w : "100%",
          height: !!imageWrapperSize.h ? imageWrapperSize.h : "100%",
        }}
        className="puzzle__container"
      >
        {[...Array(cols * cols).fill(1)].map((item, idx) => {
          const imageChunkH = Math.ceil(imageWrapperSize.h / cols);
          const imageChunkW = Math.ceil(imageWrapperSize.w / cols);

          const leftOffset =
            (idx - Math.floor(idx / cols) * cols) * imageChunkW;
          const topOffset = Math.floor(idx / cols) * imageChunkH;

          const randomDelay = Math.round(Math.random() * 10 * 3) / 10;

          return (
            <Box
              key={idx}
              sx={styles.image_wrapper}
              style={
                randomAnimationDelay
                  ? { animationDelay: `${randomDelay}s` }
                  : { animationDelay: "0s" }
              }
              className="puzzle__img-wrapper"
            >
              <Box
                sx={{
                  ...styles.image,
                  backgroundImage: `url(${
                    process.env.NEXT_PUBLIC_BACK_URL + url
                  })`,
                }}
                style={{
                  width: !!imageWrapperSize.w ? imageWrapperSize.w : "100%",
                  height: !!imageWrapperSize.h ? imageWrapperSize.h : "100%",
                  backgroundPosition: `-${leftOffset}px -${topOffset}px`,
                }}
                className="puzzle__img"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
