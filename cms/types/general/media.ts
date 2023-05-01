import { IStrapiCollectionNode, IStrapiNode } from "./strapi-node";

export interface IMediaFormat {
  ext: string;
  hash: string;
  height: number;
  width: number;
  mine: string;
  name: string;
  url: string;
  size: number;
  path?: string;
}

export type TMediaFormatKey = "medium" | "small" | "thumbnail";

export interface IMediaData {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: Record<TMediaFormatKey, IMediaFormat>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  related?: IStrapiNode<any>[];
}

export type TMedia = IStrapiNode<IMediaData>;
export type TMediaCollection = IStrapiCollectionNode<IMediaData>;
