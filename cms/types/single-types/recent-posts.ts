import { IAttributes, IStrapiNode } from '@cms/types/general/strapi-node';

export interface IRecentPostsData extends IAttributes {
    Title?: string;
}

export type TRecentPosts = IStrapiNode<IRecentPostsData>;
