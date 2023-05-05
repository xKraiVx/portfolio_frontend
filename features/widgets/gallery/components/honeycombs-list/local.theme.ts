import { isOdd } from "@common/utils/is-odd";
import { Theme, alpha } from "@mui/material";

export const localTheme = (
  theme: Theme,
  countPerRow: number,
  rowCount: number,
  offset: number = 0
) => {
  const galleryWrapperWidth = 125;

  const themeOffset = theme.spacing(offset);
  const itemHeight = (galleryWrapperWidth / countPerRow) * 2;
  const wrapperHeight =
    itemHeight * rowCount - (itemHeight / 4) * (rowCount - 1);

  const rowStyle = () => {
    const rowsIndexes = Array.from(Array(rowCount).keys());

    return rowsIndexes.reduce((styles, rowIdx) => {
      const yOffset = (-galleryWrapperWidth / (2 * countPerRow)) * rowIdx;
      const yGap = theme.spacing(offset * rowIdx);

      if (isOdd(rowIdx)) {
        styles[`&:nth-of-type(${rowIdx + 1}) > div`] = {
          transform: `translate(calc(${galleryWrapperWidth}vw / (${countPerRow} * 4)), calc(${yOffset}vw + ${yGap}))`,
          // mt: `calc(${yOffset}vw + ${yGap})`,
        };
        return styles;
      }

      styles[`&:nth-of-type(${rowIdx + 1}) > div`] = {
        transform: `translate(calc(-${galleryWrapperWidth}vw / (${countPerRow} * 4)), calc(${yOffset}vw + ${yGap}))`,
        // mt: `calc(${yOffset}vw + ${yGap})`,
      };

      return styles;
    }, {});
  };

  return {
    root: {
      position: "relative",
      transition: "all 2s ease-in-out",
      height: `calc(${wrapperHeight}vw + ${theme.spacing(
        offset * (rowCount - 1)
      )})`,
    },
    wrapper: {
      position: "absolute",
      width: `${galleryWrapperWidth}vw`,
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
    },
    row: {
      ...rowStyle(),
      "> div": {
        display: "grid",
        gridTemplateColumns: `repeat(${countPerRow}, 1fr)`,
        gap: themeOffset,
      },
    },
    item: {
      height: `${itemHeight}vw`,
    },
  };
};
