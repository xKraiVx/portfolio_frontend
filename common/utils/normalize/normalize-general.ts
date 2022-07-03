import { ImagesCollectionStrapi, ImageStrapi } from "../../../cms/types/general"
import { ImageNormalized, ImageCollectionNormalized } from "../../types/general"

type NormalizeImageData = (imageData: ImageStrapi) => ImageNormalized

export const normalizeImageData: NormalizeImageData = (imageData) => {
    if (!imageData.data) {
        return null
    }

    const formatedData = imageData.data.attributes
    
    return {
        alt: formatedData.alternativeText,
        ...formatedData
    }
}

type NormalizeImagesCollectionData = (imageData: ImagesCollectionStrapi) => ImageCollectionNormalized

export const normalizeImagesCollectionData: NormalizeImagesCollectionData = (imagesData) => {
    if (!imagesData?.data) {
        return null
    }

    const formatedData = imagesData?.data.map(image => ({
        ...image.attributes
    }))
    
    return formatedData
}