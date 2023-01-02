import { ICallToActionN } from '@cms/normalized-types/single-types/call-to-action-normalized';
import { TCallToAction } from '@cms/types/single-types/call-to-action';
import { normalizeImage } from '../general/normalize-image';

export const normalizeCallToAction = (res: TCallToAction): ICallToActionN => {
    const {
        Image,
        Title: title,
        Description: description,
        LinkText: linkText,
        LinkUrl: linkUrl,
    } = res.data.attributes || {};

    const image = Image ? normalizeImage(Image) : null;

    return {
        image,
        title,
        description,
        linkText,
        linkUrl,
    };
};
