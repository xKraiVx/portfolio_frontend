import { formatWidgetName } from "@common/utils/format-widget-name/format-widget-name";
import { normalizeNavigationId } from "../components/normalize-navigation-id";
import { normalizePostPreviewsData } from "../collection-types/normalize-post";
import { IGallery } from "@cms/types/widgets/global-widgets/gallery.type";
import { IGalleryN } from "@cms/normalized-types/widgets/global-widgets/gallery-normalized.type";
import { normalizeMediaCollection } from "../general/normalize-image";

export type TNormalizeGallery = (data: IGallery) => IGalleryN;

export const normalizeGallery: TNormalizeGallery = (data) => {
  const { __typename, title, navigation_id, images, gallery_type } = data || {},
    normalizedImages = normalizeMediaCollection(images);

  return {
    name: __typename,
    template: formatWidgetName(__typename),
    title,
    type: gallery_type,
    images: normalizedImages,
    navigation_id: normalizeNavigationId(navigation_id),
  };
};
