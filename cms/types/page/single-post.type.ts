import { TPosts } from "../collection-types/post.type";
import { THeader } from "../single-types/header";

export interface ISinglePost {
  header: THeader;
  posts: TPosts;
}
