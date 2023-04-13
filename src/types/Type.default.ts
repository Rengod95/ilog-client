export type Indexible<T = object> = T & {
  [Tkey in keyof T]: T[Tkey];
};

export type Key = string;
export type LastModified = Date;
export type ETag = string;

export interface BaseResponse<TValue = unknown> {
  isSucess: boolean;
  code: number;
  message: string;
  result: TValue;
}
export interface S3Document {
  Key: Key;
  LastModified: LastModified;
  ETag: ETag;
  Url: string;
}
