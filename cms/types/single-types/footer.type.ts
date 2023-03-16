import { ILinkComponent } from "@cms/types/components/link-component";
import { IStrapiNode } from "@cms/types/general/strapi-node";
import { ILogoComponent } from "../components/logo-component";

export interface IFooterData {
  designed_by?: ILinkComponent;
  rights?: string;
}

export type TFooter = IStrapiNode<IFooterData>;
