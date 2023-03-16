import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";
import { IHomePageN } from "@cms/normalized-types/single-types/home-page-normalized";

export interface IHomeN {
  header: IHeaderN;
  homePage: IHomePageN;
  footer: IFooterN;
}
