import { TMedia } from "../general/media";
import { ISeo } from "../general/seo";
import { IStrapiCollectionNode, IStrapiNode } from "../general/strapi-node";

export interface IPostSlug {
  attributes: {
    slug: string;
  };
}

export interface IPostSlugs {
  posts: {
    data: IPostSlug[];
  };
}

export interface IPostData {
  category: any;
  description?: string;
  featured_image: TMedia;
  seo: ISeo;
  title: string;
  slug: string;
  tags: any;
}

export type TPosts = IStrapiCollectionNode<IPostData>;

export interface IPostPreviewData {
  category: any;
  description?: string;
  featured_image: TMedia;
  title: string;
  slug: string;
  tags: any;
}

export type TPostPreviews = IStrapiCollectionNode<IPostPreviewData>;
