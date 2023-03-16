import { IPostsPreviewsN } from "@cms/normalized-types/collection-types/post-normalized.type";
import { IBlogPageN } from "@cms/normalized-types/single-types/blog-page-normalized";
import { IFooterN } from "@cms/normalized-types/single-types/footer-normalized.type";
import { IHeaderN } from "@cms/normalized-types/single-types/header-normalized";

export interface IBlogN {
  header: IHeaderN;
  blogPage: IBlogPageN;
  posts: IPostsPreviewsN;
  footer: IFooterN;
}
