import { IPostsPreviewsN } from '../collection-types/post-normalized';

export interface IRecentPostsN {
    title?: string;
    posts: IPostsPreviewsN | null;
}
