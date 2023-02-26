import { ISeoN } from "@cms/normalized-types/general/seo-normalized";

export interface IBlogPageN {
  title: string;
  seo: ISeoN | null;
}
