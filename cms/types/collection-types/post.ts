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

/* export interface IPostData extends IAttributesWithPublish {
  Title: string;
  Slug: string;
  Content?: string;
  FeaturedImage?: IStrapiNode<IImageData>;
  seo?: ISeo;
  Author?: string;
}

export interface IPostsPreviewsData {
  Title: string;
  Slug: string;
  Author?: string;
  FeaturedImage?: IStrapiNode<IImageData>;
  createdAt: Date;
}

export type TPostsPreviews = IStrapiCollectionNode<IPostsPreviewsData>;
export type TPosts = IStrapiCollectionNode<IPostData>; */
