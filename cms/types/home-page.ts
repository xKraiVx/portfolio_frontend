import { HeaderStrapi } from "./header"
import { ImagesCollectionStrapi } from "./general"

export type HomePWStrapi = HomePWHeroStrapi | TestPWHeroStrapi

export interface HomePStrapi {
    homePage: {
        data: {
            attributes: {
                title: string
                widgets: Array<HomePWStrapi>
            }
        }
    },
    header: HeaderStrapi
}

interface HomePWHeroStrapi {
    id: string,
    name: 'hero',
    slide: any
}

interface TestPWHeroStrapi {
    id: string,
    name: 'test',
    slide: any
}