import { ILinkComponentN } from "@cms/normalized-types/components/link-component-normalized";
import { ILogoComponentN } from "../components/logo-component-normalized";

export interface IHeaderN {
  logo?: ILogoComponentN;
  menu?: ILinkComponentN[];
}
