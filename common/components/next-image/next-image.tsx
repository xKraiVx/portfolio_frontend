import { Box } from "@mui/material";
import Image, { ImageProps } from "next/image";
// import { getMedia } from 'common/utils/media/media';

//TODO:(HIGHT) Fix image for static or upload images

interface Props extends ImageProps {
  onLoad?: (e: any) => void;
  className?: string;
}

export const NextImage = ({
  alt,
  src,
  onLoad,
  width,
  height,
  ...props
}: Props): JSX.Element => {
  const path = process.env.NEXT_PUBLIC_BACK_URL || "";

  if (!src) {
    return <></>;
  }

  let isUploadedImage = false;

  if (typeof src === "string") {
    isUploadedImage = src.includes("/uploads/");
  }

  if (!width || !height) {
    return (
      <Image
        onLoadingComplete={(e) => onLoad?.(e)}
        className={props.className}
        layout="fill"
        src={!isUploadedImage ? src : `${path}${src}`}
        alt={alt || ""}
        {...props}
      />
    );
  }

  return (
    <Image
      onLoadingComplete={(e) => onLoad?.(e)}
      className={props.className}
      width={width}
      height={height}
      src={!isUploadedImage ? src : `${path}${src}`}
      alt={alt || ""}
      {...props}
    />
  );
};
