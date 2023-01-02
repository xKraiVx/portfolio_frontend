import { IHero } from "./hero";

export interface IPageWidget<T> {
  id: number;
  name: T;
}

export type TPageWidget = IHero;
