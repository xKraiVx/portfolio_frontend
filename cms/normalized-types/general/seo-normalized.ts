import { ISeoSocial } from "@cms/types/general/seo";
import { TMediaN } from "./media-normalized";

export interface ISeoN {
  id: number;
  cannonicalUrl?: string;
  keywords?: string;
  metaDescription?: string;
  metaImage?: TMediaN;
  metaSocial?: ISeoSocial[];
  metaRobots?: string;
  metaTitle?: string;
  metaViewport?: string;
  structuredData?: string;
  updateAt: Date;
}
