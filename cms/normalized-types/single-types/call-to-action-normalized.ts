import { TImageN } from "../general/media-normalized";

export interface ICallToActionN {
  image: TImageN | null;
  title?: string;
  description?: string;
  linkText: string;
  linkUrl: string;
}
