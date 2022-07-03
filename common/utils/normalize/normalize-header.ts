import { HeaderStrapi } from "../../../cms/types/header"
import { HeaderNormalized } from "../../types/header"
import { normalizeImageData } from "./normalize-general"

type NormalizeHeaderData = (headerData: HeaderStrapi) => HeaderNormalized

const normalizeHeaderData: NormalizeHeaderData = (headerData) => {

    const { navigation, logo } = headerData.data.attributes

    return {
        navigation: navigation.map(item => ({
            text: item.text,
            href: item.href,
            icon: normalizeImageData(item.icon)
        })),
        logo: normalizeImageData(logo.image)
    }
}

export default normalizeHeaderData