import { ETemplateNameN } from "../general/enums/templates.enum";
import { ISeo } from "../general/seo";
import { IAttributesWithPublish, IStrapiNode } from "../general/strapi-node";

export interface IContactPageData extends IAttributesWithPublish {
  templateName: ETemplateNameN.CONTACT;
  Title: string;
  Slug: string;
  Description: string;
  PortalId: number;
  FormId: string;
  seo?: ISeo;
}

export type TContactPage = IStrapiNode<IContactPageData>;
