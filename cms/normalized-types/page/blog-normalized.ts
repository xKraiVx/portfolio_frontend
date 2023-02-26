import { IBlogPageN } from "../single-types/blog-page-normalized";
import { IHeaderN } from "../single-types/header-normalized";

export interface IBlogN {
  header: IHeaderN;
  blogPage: IBlogPageN;
}
