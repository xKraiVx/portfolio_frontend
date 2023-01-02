import { ETemplateNameN } from '@cms/types/general/enums/templates';
import { ISeoN } from '../general/seo-normalized';

export interface IContactPageN {
    templateName: ETemplateNameN.CONTACT;
    seo: ISeoN | null;
    slug: string;
    title: string;
    description?: string;
    portalId?: number;
    formId?: string;
}
