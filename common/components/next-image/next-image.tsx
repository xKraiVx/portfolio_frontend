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

  return (
    <Image
      onLoad={() => onLoad?.()}
      className={props.className}
      // loader={loader}
      src={!isUploadedImage ? src : `${path}${src}`}
      alt={alt || ""}
      {...props}
    />
  );
};
