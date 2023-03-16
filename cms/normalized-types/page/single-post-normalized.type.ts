import { IPostN } from "@cms/normalized-types/collection-types/post-normalized.type";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";
import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";

export interface ISinglePostN {
  header: IHeaderN;
  post: IPostN;
  footer: IFooterN;
}
