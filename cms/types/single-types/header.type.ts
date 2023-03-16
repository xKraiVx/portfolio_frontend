import { ILinkComponent } from "@cms/types/components/link-component";
import { IStrapiNode } from "@cms/types/general/strapi-node";
import { ILogoComponent } from "../components/logo-component";

export interface IHeaderData {
  navigation: ILinkComponent[];
  logo: ILogoComponent;
}

export type THeader = IStrapiNode<IHeaderData>;
