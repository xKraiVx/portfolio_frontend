import Image, { ImageProps } from "next/image";
// import { getMedia } from 'common/utils/media/media';

//TODO:(HIGHT) Fix image for static or upload images

interface Props extends ImageProps {
  onLoad?: () => void;
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

  /* const loader = ({ src, width }: any) => {
        return getMedia(`${src}?w=${width}`);
    }; */

  if (!width || !height) {
    return (
      <Image
        onLoad={() => onLoad?.()}
        className={props.className}
        // loader={loader}
        layout="fill"
        src={!isUploadedImage ? src : `${path}${src}`}
        alt={alt || ""}
        {...props}
      />
    );
  }

  return (
    <Image
      onLoad={() => onLoad?.()}
      className={props.className}
      // loader={loader}
      width={width}
      height={height}
      src={!isUploadedImage ? src : `${path}${src}`}
      alt={alt || ""}
      {...props}
    />
  );
};
