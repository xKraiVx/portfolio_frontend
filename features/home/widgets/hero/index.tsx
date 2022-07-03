import { HomePWHeroNormalized } from "@common/types/home-page"
import { FunctionComponent, useEffect } from "react"

interface Props {
    widgetData: HomePWHeroNormalized
}

const path = process.env.NEXT_PUBLIC_BACK_URL;

const Hero: FunctionComponent<Props> = ({ widgetData }) => {
    const { title, images } = widgetData

    useEffect(() => console.log(path), [])

    return (
        <section>
            <div className="container">
                <h1>{title}</h1>
            </div>
            {images.map((img, id) => {
                const {alternativeText, url} = img

                return (
                    <img key={id} src={`${path}${url}`} alt={alternativeText} /> 
                )
            })}
        </section>
    )
}

export default Hero