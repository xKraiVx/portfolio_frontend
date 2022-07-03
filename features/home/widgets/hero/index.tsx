import { HomePWHeroNormalized } from "@common/types/home-page"
import { FunctionComponent } from "react"

interface Props {
    widgetData: HomePWHeroNormalized
}

const path = process.env.BACK_URL || 'http://localhost:1337';

const Hero: FunctionComponent<Props> = ({ widgetData }) => {
    const { title, images } = widgetData

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