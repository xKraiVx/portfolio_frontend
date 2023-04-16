import { IHero } from "@cms/types/widgets/home-widgets/hero.type";
import { formatWidgetName } from "@common/utils/format-widget-name/format-widget-name";
import { normalizeImage } from "../general/normalize-image";

//TODO: Rewrite
export type TNormilizeTitleAndText = (data: IHero) => any;

export const normalizeHero: TNormilizeTitleAndText = (data) => {
  const { __typename, slides } = data || {};

  const normalizedSlides = slides.map((slide) => {
    const { video, image, text } = slide,
      normalizedVideo = image ? normalizeImage(image) : null,
      normalizedImage = video ? normalizeImage(video) : null;

    return {
      text,
      video: normalizedVideo,
      image: normalizedImage,
    };
  });

  return {
    name: __typename,
    slides: normalizedSlides,
    template: formatWidgetName(__typename),
  };
};
