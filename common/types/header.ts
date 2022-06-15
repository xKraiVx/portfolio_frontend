import { ImageFormated } from "./general"

export interface HeaderFormated {
    navigation: {
        text: string,
        href: string,
        icon: ImageFormated
    }[],
    logo: ImageFormated
}