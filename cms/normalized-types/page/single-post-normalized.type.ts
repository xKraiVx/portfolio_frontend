import { IPostN } from "../collection-types/post-normalized.type";
import { IHeaderN } from "../single-types/header-normalized";

export interface ISinglePostN {
  header: IHeaderN;
  post: IPostN;
}
