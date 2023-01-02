import { IAttributes, IStrapiNode } from "@cms/types/general/strapi-node";
import { TImage } from "../general/media";

export interface ICallToActionData extends IAttributes {
  Image?: TImage;
  Title?: string;
  Description?: string;
  LinkText: string;
  LinkUrl: string;
}

export type TCallToAction = IStrapiNode<ICallToActionData>;
