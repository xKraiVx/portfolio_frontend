import { ISeoSocial } from "@cms/types/general/seo";
import { TImageN } from "./media-normalized";

export interface ISeoN {
  id: number;
  cannonicalUrl?: string;
  keywords?: string;
  metaDescription?: string;
  metaImage?: TImageN;
  metaSocial?: ISeoSocial[];
  metaRobots?: string;
  metaTitle?: string;
  metaViewport?: string;
  structuredData?: string;
}
