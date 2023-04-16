import { TMediaN } from "../../general/media-normalized";
import { IDefaultWidgetN } from "../../general/default-widget-normalized";

interface IHeroSlideN {
  text?: string;
  video?: TMediaN;
  image?: TMediaN;
}

export interface IHeroN extends IDefaultWidgetN {
  text?: string;
  slides?: IHeroSlideN[];
}
