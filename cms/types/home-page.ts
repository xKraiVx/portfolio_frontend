import { HeaderStrapi } from "./header"

export interface HomePageStrapi {
    homePage: {
        data: {
            attributes: {
                title: string
            }
        }
    },
    header: HeaderStrapi
}