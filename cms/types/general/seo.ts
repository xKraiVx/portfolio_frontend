import { TMedia } from "./media";

export interface ISeoSocial {
  id: number;
  title?: string;
  description?: string;
  socialNetwork?: string;
}

export interface ISeo {
  id: number;
  cannonicalUrl?: string;
  keywords?: string;
  metaDescription?: string;
  metaImage?: TMedia;
  metaSocial?: ISeoSocial[];
  metaRobots?: string;
  metaTitle?: string;
  metaViewport?: string;
  structuredData?: string;
}
