import { ISeoN } from "@cms/normalized-types/general/seo-normalized";
import { TWidgetN } from "@cms/normalized-types/widgets/widget-normalized";
import { ETemplateNameN } from "@cms/types/general/enums/templates.enum";

export interface IPageN {
  title: string;
  slug: string;
  templateName: ETemplateNameN.DEFAULT;
  widgets: TWidgetN[] | null;
  seo: ISeoN | null;
}
