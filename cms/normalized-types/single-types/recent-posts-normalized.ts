import { IPostsPreviewsN } from "../collection-types/post-normalized.type";

export interface IRecentPostsN {
  title?: string;
  posts: IPostsPreviewsN | null;
}
