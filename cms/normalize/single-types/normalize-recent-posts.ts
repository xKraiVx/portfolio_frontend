import { IPostsPreviewsN } from '@cms/normalized-types/collection-types/post-normalized';
import { IRecentPostsN } from '@cms/normalized-types/single-types/recent-posts-normalized';
import { TRecentPosts } from '@cms/types/single-types/recent-posts';

export const normalizeRecentPosts = (
    recentPostData: TRecentPosts,
    posts: IPostsPreviewsN | null,
): IRecentPostsN => {
    const { Title: title } = recentPostData.data.attributes || {};

    return {
        title,
        posts,
    };
};
