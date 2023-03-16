import { THeader } from "@cms/types/single-types/header.type";
import { THomePage } from "@cms/types/single-types/home-page";
import { TFooter } from "@cms/types/single-types/footer.type";

export interface IHome {
  header: THeader;
  homePage: THomePage;
  footer: TFooter;
}
