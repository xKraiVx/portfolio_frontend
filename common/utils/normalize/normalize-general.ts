import { ImagesCollectionStrapi, ImageStrapi } from "@cms/types/general"
import { ImageNormalized, ImagesCollectionNormalized } from "@common/types/general"

type NormalizeImageData = (imageData: ImageStrapi) => ImageNormalized

export const normalizeMediaData: NormalizeImageData = (imageData) => {
    if (!imageData.data) {
        return null
    }

    const formatedData = imageData.data.attributes
    
    return {
        ...formatedData
    }
}

type NormalizeImagesCollectionData = (imageData: ImagesCollectionStrapi) => ImagesCollectionNormalized

export const normalizeImagesCollectionData: NormalizeImagesCollectionData = (imagesData) => {
    if (!imagesData?.data) {
        return null
    }

    const formatedData = imagesData?.data.map(image => ({
        ...image.attributes
    }))
    
    return formatedData
}