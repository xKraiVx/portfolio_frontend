import { normalizeHeaderData } from "."
import { HomePageStrapi } from "../../../cms/types/home-page"
import { HomePageFormated } from "../../types/home-page"

type NormalizeHomePage = (data: HomePageStrapi) => HomePageFormated

const normalizeHomePageData: NormalizeHomePage = (data) => {

    const { header, homePage } = data

    return {
        header: normalizeHeaderData(header),
        title: homePage.data.attributes.title
    }
}

export default normalizeHomePageData