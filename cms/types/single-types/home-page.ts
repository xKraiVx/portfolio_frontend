import { TPageWidget } from "@cms/types/widgets/widget.type";
import { ISeo } from "../general/seo";
import { IStrapiNode } from "../general/strapi-node";

export interface IHomePageData {
  widgets?: TPageWidget[];
  seo?: ISeo;
}

export type THomePage = IStrapiNode<IHomePageData>;
