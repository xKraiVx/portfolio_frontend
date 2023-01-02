import { IContactPageN } from '@cms/normalized-types/single-types/contact-page-normalized';
//TODO: Fix any, rewrite on strapi

export const normalizeContactPage = (data: any): IContactPageN => {
    const {
        templateName,
        contact: { contactPageTitle, contactDescription, formId, portalId },
    } = data || {};

    return {
        templateName,
        title: contactPageTitle,
        description: contactDescription,
        formId,
        portalId,
    };
};
