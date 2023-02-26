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

export interface IPostPreview {
  category: any;
  description?: string;
  featured_image: any;
}
