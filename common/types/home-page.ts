import { ImageNormalized, VideoNormalized } from "./general";
import { HeaderNormalized } from "./header";

export type HomePWNormalized = HomePWHeroNormalized | TestPWHeroNormalized

export interface HomePNormalized {
    header: HeaderNormalized;
    title: string;
    widgets?: Array<HomePWNormalized>;
    toggleTheme: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface HomePWHeroSlideNormalized {
    text: string;
    video: VideoNormalized;
    image: ImageNormalized;
}

export interface HomePWHeroNormalized {
    id: string;
    name: 'hero';
    slides: HomePWHeroSlideNormalized[];
}

interface TestPWHeroNormalized {
    id: string;
    name: 'test';
    slides: any;
}