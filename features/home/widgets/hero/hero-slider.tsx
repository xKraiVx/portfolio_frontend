import { HomePWHeroSlideNormalized } from "@common/types/home-page";
import { Box, Container, Typography, useTheme } from "@mui/material"
import { FunctionComponent, useState } from "react"
import { heroSliderStyles } from "./hero-slider.theme";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import cn from 'classnames';
import { ImagePuzzle } from "@common/components/image-puzzle/image-puzzle";
import { NextVideo } from "@common/components/next-video/next-video";
import { StoreMallDirectory } from "@mui/icons-material";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/effect-fade";

/* TO DO: type of SLIDES */
interface Props {
    slides: HomePWHeroSlideNormalized[]
}

export const HeroSlider: FunctionComponent<Props> = ({ slides }) => {
    const theme = useTheme();
    const styles = heroSliderStyles(theme);


    return (
        <Box className="fader" sx={styles.slider}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[EffectFade, Autoplay]}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={`slide_${idx}`}>
                        <Box
                            className={cn(
                                "fader__slide"
                            )}
                            sx={styles.slide}
                        >
                            <NextVideo
                                video={slide.video}
                                sx={styles.video}
                                controls={false}
                                loop={true}
                                autoPlay={true}
                            />
                            <ImagePuzzle image={slide.image} sx={styles.puzzle} />
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
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Box>
    )
}