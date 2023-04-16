import { TMedia } from "../../general/media";
import { IPageWidget } from "../widget.type";

interface IHeroSlide {
  text?: string;
  image?: TMedia;
  video?: TMedia;
}

export interface IHero extends IPageWidget<"ComponentHomeWidgetHero"> {
  slides: IHeroSlide[];
}
