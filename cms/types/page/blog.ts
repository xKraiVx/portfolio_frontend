import { TPostPreviews } from "../collection-types/post.type";
import { TBlogPage } from "../single-types/blog-page";
import { THeader } from "../single-types/header";
export interface IBlog {
  header: THeader;
  blogPage: TBlogPage;
  posts: TPostPreviews;
}
