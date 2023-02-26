import { ISeo } from "../general/seo";
import { IStrapiNode } from "../general/strapi-node";

export interface IBlogPageData {
  title: string;
  seo?: ISeo;
}

export type TBlogPage = IStrapiNode<IBlogPageData>;
