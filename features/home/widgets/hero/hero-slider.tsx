import { HomePWHeroSlideNormalized } from "@common/types/home-page";
import { Box, Container, Typography, useTheme } from "@mui/material"
import { FunctionComponent, useState } from "react"
import { heroSliderStyles } from "./hero-slider.theme";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import cn from 'classnames';
import { ImagePuzzle } from "@common/components/image-puzzle/image-puzzle";

/* TO DO: type of SLIDES */
interface Props {
    slides: HomePWHeroSlideNormalized[]
}

export const HeroSlider: FunctionComponent<Props> = ({ slides }) => {
    const theme = useTheme();
    const styles = heroSliderStyles(theme);
    const [opacities, setOpacities] = useState<number[]>([])

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            slides: slides.length,
            loop: true,
            detailsChanged(s) {
                const new_opacities = s.track.details.slides.map((slide) => slide.portion)
                setOpacities(new_opacities)
            },
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 5000)
                }
                slider.on("created", () => {
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <Box ref={sliderRef} className="fader" sx={styles.slider}>
            {slides.map((slide, idx) => (
                <Box
                    className={cn(
                        "fader__slide",
                        {
                            'active': opacities[idx] === 1
                        }
                    )}
                    key={`slide_${idx}`}
                    sx={styles.slide}
                    style={{ opacity: opacities[idx] }}
                >
                    <Container sx={styles.slide_wrapper}>
                        <Box className="title-wrapper">
                            <Typography
                                component={idx === 0 ? 'h1' : 'h2'}
                                variant="h1"
                                className="title"
                                sx={styles.title}
                            >
                                {slide.text}
                            </Typography>
                        </Box>
                        <Box className="shadow-wrapper">
                            <Typography
                                variant="h1"
                                component="span"
                                className="shadow"
                                sx={styles.shadow}
                            >
                                {slide.text}
                            </Typography>
                        </Box>
                    </Container>
                    <ImagePuzzle image={slide.image} sx={styles.puzzle}/>
                </Box>
            ))}
        </Box>
    )
}