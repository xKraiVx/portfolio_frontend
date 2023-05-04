import { TMediaN } from "@cms/normalized-types/general/media-normalized";
import { Box, useTheme } from "@mui/material";
import { localTheme } from "./local.theme";
import {
  MouseEvent as MouseEventReact,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IMediaData } from "@cms/types/general/media";
import { Honeycomb } from "../honeycomb";
import { throttle } from "@common/utils/throttle";
import { log } from "console";

interface HoneycombsListProps {
  images: TMediaN[];
  pageSize: number;
  countPerRow: number;
}

let mouseMoveDelayed = false;

export const HoneycombsList = ({
  images,
  pageSize,
  countPerRow,
}: HoneycombsListProps): JSX.Element => {
  const [page, setPage] = useState(1);
  const [sectionTranslate, setSectionTranslate] = useState({ x: 0, y: 0 });
  const theme = useTheme();
  const rootElement = useRef<HTMLElement>(null);
  const throttleTimer = useRef(null);

  const currentImages = useMemo(
    (): IMediaData[][] =>
      images.slice(0, pageSize).reduce((rows, image) => {
        const currentRow = rows[rows.length - 1];
        if (rows.length === 0 || currentRow.length > countPerRow - 1) {
          rows.push([image]);
          return rows;
        }
        currentRow.push(image);
        return rows;
      }, []),
    [page, pageSize, countPerRow]
  );

  const currentTranslate = useMemo(
    () => `translate(${sectionTranslate.x}%, ${sectionTranslate.y}%)`,
    [sectionTranslate]
  );

  const mouseMoveHandler = (e: MouseEventReact<HTMLDivElement, MouseEvent>) => {
    if (mouseMoveDelayed) return;

    mouseMoveDelayed = true;
    throttleTimer.current = setTimeout(() => {
      mouseMoveDelayed = false;
    }, 100);

    const { clientY, clientX } = e;
    const { height, width } = screen;

    const xPosition = ((clientX / width - 0.5) * 2).toFixed(2);
    const yPosition = ((1 - clientY / height - 0.5) * 2).toFixed(2);

    setSectionTranslate({
      x: -xPosition * 10,
      y: +yPosition * 10,
    });
  };

  useEffect(() => {
    return () => clearTimeout(throttleTimer.current);
  }, []);

  const styles = localTheme(theme, countPerRow, currentImages.length, 2);
  return (
    <Box
      ref={rootElement}
      sx={{
        ...styles.root,
        transform: currentTranslate,
      }}
      onMouseMove={mouseMoveHandler}
    >
      <Box sx={styles.wrapper}>
        {currentImages.map((row, idx) => (
          <Box key={`row-${idx}`} sx={styles.row}>
            {row.map((image) => (
              <Honeycomb key={image.hash} image={image} sx={styles.item} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
