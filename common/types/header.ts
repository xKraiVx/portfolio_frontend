import { ImageNormalized } from "./general"

export type HeaderNavigationItem = {
    text: string;
    href: string;
    icon: ImageNormalized;
}

export interface HeaderNormalized {
    navigation: HeaderNavigationItem[];
    logo: ImageNormalized;
}