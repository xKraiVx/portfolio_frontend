import Image from "next/image";
import { FunctionComponent, ImgHTMLAttributes } from "react";

/* const NextImage: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({ src, width, height, ...props }) => {
    console.log(`${process.env.NEXT_PUBLIC_BACK_URL}${src}`);
    
    return (
        <Image src={src} width={width} height={height} />
    );
}

export default NextImage; */

import PropTypes from 'prop-types';

import { mediaPropTypes } from 'common/utils/prop-types/prop-types';
import { getStrapiMedia } from 'common/utils/media/media';


export const NextImage = ({ media, src = null, onLoad = () => { }, ...props }) => {

    const path = process.env.NEXT_PUBLIC_BACK_URL || '';

    const { url, alternativeText, width, height } = media || {};

    if (!src && !url) {
        return <></>;
    }
    
    const loader = ({ src, width }) => {
        return url ? getStrapiMedia(`${src}?w=${width}`) : src;
    };

    return (
        <Image
            onLoad={onLoad}
            className={props.className}
            loader={loader}
            src={url || `${path}${src}`}
            width={props.width ? props.width : width}
            height={props.height ? props.height : height}
            alt={alternativeText || ''}
            {...props}
        />
    );
};

NextImage.propTypes = {
    media: mediaPropTypes,
    className: PropTypes.string,
};