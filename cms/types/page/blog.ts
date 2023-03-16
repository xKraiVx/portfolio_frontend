import { TPostPreviews } from "@cms/types/collection-types/post.type";
import { TBlogPage } from "@cms/types/single-types/blog-page";
import { THeader } from "@cms/types/single-types/header.type";
import { TFooter } from "@cms/types/single-types/footer.type";
export interface IBlog {
  header: THeader;
  blogPage: TBlogPage;
  posts: TPostPreviews;
  footer: TFooter;
}
