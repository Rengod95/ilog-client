export type LogField = {
  content?: string;
  date?: string;
  title?: string;
  description?: string;
  image?: string;
  author?: string;
};

export type Log = LogField & {
  [T in keyof LogField]: LogField[T];
};

export type Slug = string;
