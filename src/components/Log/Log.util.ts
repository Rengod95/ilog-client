import path from 'path';
import {
  convertFileNameToSlug,
  getFileNames,
  getPostPathBySlug,
  convertMarkdownToHTML,
  getPostFileByPath,
  getMatterResultWithFile,
} from '@/util';
import { Log, LogField, Slug } from '.';

export const DEFAULT_LOG_FIELD = [
  'slug',
  'title',
  'description',
  'content',
  'author',
  'image',
  'date',
];

export const DEFAULT_POST_DATA_DIRECTORY = path.join(
  process.cwd(),
  '/src/contents/_posts'
);

export const getLogBySlug = (slug: string, fields: string[]) => {
  const log: Log = {};
  const path = getPostPathBySlug(DEFAULT_POST_DATA_DIRECTORY, slug);
  const file = getPostFileByPath(path);
  const { content, data } = getMatterResultWithFile(file);

  fields?.forEach(async (field: string) => {
    if (field === 'slug') log[field as keyof Log] = slug;
    if (field === 'content') log[field] = content;
    if (typeof data[field] !== undefined && field !== 'content')
      log[field as keyof Log] = data[field];
  });

  return log;
};

export const getAllSlugs = (): Slug[] => {
  const fileNames = getFileNames(DEFAULT_POST_DATA_DIRECTORY);
  return fileNames.map((name) => convertFileNameToSlug(name));
};
