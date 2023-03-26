export type Indexible<T = {}> = T & {
  [Tkey in keyof T]: T[Tkey];
};
