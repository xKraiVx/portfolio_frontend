import { ImageNormalized } from "./general"

export interface HeaderNormalized {
    navigation: {
        text: string,
        href: string,
        icon: ImageNormalized
    }[],
    logo: ImageNormalized
}