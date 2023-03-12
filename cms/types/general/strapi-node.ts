export interface IPagination {
  pageSize;
  total;
  pageCount;
  page;
}

export interface IStrapiNodeData<D> {
  id: number;
  attributes: D;
}

export interface IStrapiNode<T> {
  data: IStrapiNodeData<T> | null;
}

export interface IStrapiCollectionNode<T> {
  data: IStrapiNodeData<T>[] | null;
  meta: {
    pagination?: IPagination;
  };
}
