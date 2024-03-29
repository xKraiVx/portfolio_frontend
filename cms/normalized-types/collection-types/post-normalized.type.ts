import { IPagination } from "@cms/types/general/strapi-node";
import { TMediaN } from "../general/media-normalized";
import { ISeoN } from "../general/seo-normalized";

export type TPostSlugsN = string[];

export interface IPostPreviewN {
  title: string;
  description: string;
  slug: string;
  featuredImage?: TMediaN | null;
  category: string;
  updatedAt: Date;
}

export interface IPostN {
  title: string;
  description: string;
  slug: string;
  featuredImage?: TMediaN | null;
  category: string;
  seo: ISeoN;
}

export interface IPostsPreviewsN {
  postsPreviews: IPostPreviewN[];
  pagination?: IPagination | null;
}
