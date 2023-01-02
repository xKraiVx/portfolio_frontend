import { TMedia } from "../general/media";

export interface ILinkComponent {
  id: number;
  text?: string;
  icon?: TMedia;
  href: string;
  openInNewTab: boolean;
}
