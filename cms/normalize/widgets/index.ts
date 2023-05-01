import { normalizeChosenPosts } from "./normalize-chosen-posts";
import { normalizeGallery } from "./normalize-gallery";
import { normalizeHero } from "./normalize-hero";
import { normalizeInitial } from "./normalize-initial";
import { normalizeTitleAndText } from "./normalize-title-and-text";

export const normalizeWidgetsList = {
  normalizeHero,
  normalizeInitial,
  normalizeTitleAndText,
  normalizeChosenPosts,
  normalizeGallery,
};
