import { TMediaN } from "../general/media-normalized";

export interface ILinkComponentN {
  text?: string | null;
  href: string;
  icon?: TMediaN | null;
  openInNewTab: boolean | null;
}
