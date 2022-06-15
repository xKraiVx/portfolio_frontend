import { StrapiImage } from "./general"

export interface HeaderStrapi {
    data: {
        attributes: {
            navigation: {
                text: string,
                icon: StrapiImage | null,
                href: string
            }[],
            logo: {
                image: StrapiImage | null
            }
        }
    }
}