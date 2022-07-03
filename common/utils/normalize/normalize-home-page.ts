import { normalizeHeaderData, normalizeImageData } from "."
import { HomePStrapi, HomePWStrapi } from "../../../cms/types/home-page"
import { HomePNormalized, HomePWNormalized } from "../../types/home-page"
import { normalizeImagesCollectionData } from "./normalize-general"

type NormalizeHomeP = (data: HomePStrapi) => HomePNormalized

const normalizeHomePageData: NormalizeHomeP = (data) => {

    const { header, homePage } = data

    const res = {
        header: normalizeHeaderData(header),
        title: homePage.data.attributes.title,
        widgets: homePage.data.attributes?.widgets.map(widget => normalizeHomePageWidget(widget))
    }

    return res
}

export default normalizeHomePageData

function normalizeHomePageWidget(homePageWidget: HomePWStrapi): HomePWNormalized {

    const {
        id,
        name,
        title,
        images,
    } = homePageWidget

    switch (name) {
        case 'hero':
            return {
                id,
                name,
                title,
                images: normalizeImagesCollectionData(images)
            }
        case 'test':
            return {
                id,
                name,
                title,
                images: normalizeImagesCollectionData(images)
            }
        default:
            const _never: never = homePageWidget
            return _never
    }

}   