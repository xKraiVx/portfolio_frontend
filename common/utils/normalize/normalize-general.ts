import { StrapiImage } from "../../../cms/types/general"
import { ImageFormated } from "../../types/general"

type NormalizeImageData = (imageData: StrapiImage) => ImageFormated

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