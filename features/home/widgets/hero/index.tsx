import { HomePWHeroNormalized } from "@common/types/home-page"
import { FunctionComponent, useEffect } from "react"
import { CanvasGallery } from "./canvas-gallery";
import { heroStyles } from "./hero.theme";


interface Props {
    widgetData: HomePWHeroNormalized
}

const path = process.env.NEXT_PUBLIC_BACK_URL;

const Hero: FunctionComponent<Props> = ({ widgetData }) => {
    const styles = heroStyles()
    const { title, images } = widgetData

    useEffect(() => console.log(path), [])

    return (
        <section className={styles.root}>
            <CanvasGallery images={images} />
        </section>
    )
}

export default Hero