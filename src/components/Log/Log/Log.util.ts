import { convertMarkdownToMDX } from '@/util';
import { DefaultLogFields } from './Log.types';
import {
  getFrontMatterWithMarkdown,
  convertFileNameToSlug,
  getFileNames,
  getPathBySlug,
  getFileByPath,
} from '@/util/File';

import { LogData, Slug } from '.';
import matter from 'gray-matter';

export const DEFAULT_LOG_FIELD = [
  'slug',
  'title',
  'description',
  'content',
  'author',
  'image',
  'date',
];

const path = require('path-browserify');

export const DEFAULT_POST_DATA_DIRECTORY = path.join(
  process.cwd(),
  '/src/contents/_posts'
);

export const DEFAULT_LOG_FIELDS = ['title', 'date', 'tags', 'images', 'author'];

export const extractMetaFromMatter = <TInput extends matter.Input>(
  matter: matter.GrayMatterFile<TInput>,
  fields: string[]
) => {
  const result: DefaultLogFields = {};

  fields?.forEach((field: string) => {
    if (typeof matter.data[field] !== undefined)
      result[field as keyof DefaultLogFields] = matter.data[field];
  });

  return result;
};

export const getLogBySlug = (slug: string, fields: string[]) => {
  const path = getPathBySlug(DEFAULT_POST_DATA_DIRECTORY, slug);
  const file = getFileByPath(path);
  const matter = getFrontMatterWithMarkdown(file);

  const meta = extractMetaFromMatter(matter, DEFAULT_LOG_FIELDS);
  const content = convertMarkdownToMDX(matter.content);

  return { meta, content };
};

export const getAllSlugs = (): Slug[] => {
  const fileNames = getFileNames(DEFAULT_POST_DATA_DIRECTORY);
  return fileNames.map((name) => convertFileNameToSlug(name));
};
