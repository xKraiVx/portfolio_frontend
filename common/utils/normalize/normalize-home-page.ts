import { normalizeHeaderData, normalizeImageData } from "."
import { HomePStrapi, HomePWStrapi } from "../../../cms/types/home-page"
import { HomePNormalized, HomePWNormalized } from "../../types/home-page"
import { normalizeImagesCollectionData, normalizeMediaData } from "./normalize-general"

type NormalizeHomeP = (data: HomePStrapi) => HomePNormalized

const normalizeHomePageData: NormalizeHomeP = (data) => {

    const { header, homePage } = data || {};

    const res = {
        header: normalizeHeaderData(header),
        title: homePage?.data?.attributes?.title,
        widgets: homePage?.data?.attributes?.widgets?.map(widget => normalizeHomePageWidget(widget))
    }

    return res
}

export default normalizeHomePageData

function normalizeHomePageWidget(homePageWidget: HomePWStrapi): HomePWNormalized {

    const widgetName = homePageWidget?.name;

    const normalizeWidget = {
        hero: () => {
            const {
                id,
                name,
                slide
            } = homePageWidget;

            return {
                id,
                name,
                slides: slide.map(({ text, video, image }) => ({
                    text,
                    video: normalizeMediaData(video),
                    image: normalizeMediaData(image)
                }))
            }
        },
        /* TO DO: REMOVE test widget */
        test: () => {
            const {
                id,
                name,
                slide
            } = homePageWidget;

            return {
                id,
                name,
                slides: slide
            }
        }
    }

    return normalizeWidget?.[widgetName]();
}   