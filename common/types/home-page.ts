import { ImagesCollectionNormalized } from "./general";
import { HeaderNormalized } from "./header";

export type HomePWNormalized = HomePWHeroNormalized | TestPWHeroNormalized

export interface HomePNormalized {
    header: HeaderNormalized,
    title: string,
    widgets?: Array<HomePWNormalized>
}

export interface HomePWHeroNormalized {
    id: string,
    name: 'hero',
    slides: any
}

interface TestPWHeroNormalized {
    id: string,
    name: 'test',
    slides: any
}