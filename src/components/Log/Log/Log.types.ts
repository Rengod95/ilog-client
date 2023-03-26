import { Indexible } from '@/types';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type DefaultLogFields = {
  title?: string;
  date?: string;
  author?: string;
  tags?: string[];
  image?: string[];
};

export type LogData = {
  meta: Indexible<DefaultLogFields>;
  content: MDXRemoteSerializeResult;
};

export type Slug = string;
