import { ImageStrapi } from "./general"

export interface HeaderStrapi {
    data: {
        attributes: {
            navigation: {
                text: string,
                icon: ImageStrapi | null,
                href: string
            }[],
            logo: {
                image: ImageStrapi | null
            }
        }
    }
}