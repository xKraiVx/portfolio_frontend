import { TMedia } from "../general/media";
import { IPageWidget } from "./page-widget";

interface IHeroSlide {
  text?: string;
  image?: TMedia;
  video?: TMedia;
}

export interface IHero extends IPageWidget<"hero"> {
  slides: IHeroSlide[];
}
