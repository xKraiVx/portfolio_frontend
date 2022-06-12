import Image from "next/image";
import { FunctionComponent, ImgHTMLAttributes } from "react";

const NextImage: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({ src, width, height, ...props }) => {
    return (
        <Image src={src} width={width} height={height} />
    );
}

export default NextImage;