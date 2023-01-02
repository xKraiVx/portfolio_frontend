import { IStrapiCollectionNode } from '../general/strapi-node';
import { TPageWidget } from '@cms/types/page-widgets/page-widget';
import { ISeo } from '../general/seo';
import { IAttributesWithPublish } from '../general/strapi-node';
import { ETemplateNameN } from '../general/enums/templates';

export interface IDefaultPageData extends IAttributesWithPublish {
    Title: string;
    Slug: string;
    templateName: ETemplateNameN.DEFAULT;
    Widgets?: TPageWidget[];
    seo?: ISeo;
}

export type TDefaultPage = IStrapiCollectionNode<IDefaultPageData>;
