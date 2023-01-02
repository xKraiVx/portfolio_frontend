import { IHeaderN } from "../single-types/header-normalized";
import { IHomePageN } from "../single-types/home-page-normalized";

export interface IHomeN {
  header: IHeaderN;
  homePage: IHomePageN;
}
