import { TBlogPage } from "../single-types/blog-page";
import { THeader } from "../single-types/header";
export interface IBlog {
  header: THeader;
  blogPage: TBlogPage;
  posts: any;
}
