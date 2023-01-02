import {
    IStrapiCollectionNodeWithoutDefaultAttributes,
    IStrapiNodeWithoutDefaultAttributes,
} from '@cms/types/general/strapi-node';

export interface ISlugData {
    Slug: string;
}

export type ISlug = IStrapiNodeWithoutDefaultAttributes<ISlugData>;

export type ISlugCollection = IStrapiCollectionNodeWithoutDefaultAttributes<ISlugData>;
