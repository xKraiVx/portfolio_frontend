import { TPosts } from "@cms/types/collection-types/post.type";
import { TFooter } from "@cms/types/single-types/footer.type";
import { THeader } from "@cms/types/single-types/header.type";

export interface ISinglePost {
  header: THeader;
  posts: TPosts;
  footer: TFooter;
}
