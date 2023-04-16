import { IInitial } from "./global-widgets/initial.type";
import { ITitleAndText } from "./global-widgets/title-and-text.type";
import { IHero } from "./home-widgets/hero.type";

export interface IPageWidget<T> {
  id: number;
  __typename: T;
}

export type TPageWidget = IHero | IInitial | ITitleAndText;
