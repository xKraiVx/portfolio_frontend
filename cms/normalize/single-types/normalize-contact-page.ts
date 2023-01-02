import { IContactPageN } from '@cms/normalized-types/single-types/contact-page-normalized';
import { TContactPage } from '@cms/types/single-types/contact-page';
import { normalizeSeo } from '../general/normalize-seo';

export const normalizeContactPage = (pageData: TContactPage): IContactPageN => {
    const {
        seo,
        updatedAt,
        Slug: slug,
        Title: title,
        templateName,
        Description: description,
        PortalId: portalId,
        FormId: formId,
    } = pageData?.data?.attributes || {};
    const normalizedSeo = seo ? normalizeSeo(seo, updatedAt) : null;

    return {
        seo: normalizedSeo,
        slug,
        title,
        templateName,
        description,
        portalId: Number(portalId),
        formId,
    };
};
