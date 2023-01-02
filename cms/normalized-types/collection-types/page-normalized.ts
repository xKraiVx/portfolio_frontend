import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { TWidgetN } from "@cms/normalized-types/page-widgets/widget-normalized";
import { ETemplateNameN } from "@cms/types/general/enums/templates";

export interface IPageN {
  title: string;
  slug: string;
  templateName: ETemplateNameN.DEFAULT;
  widgets: TWidgetN[] | null;
  seo: ISeoN | null;
}
