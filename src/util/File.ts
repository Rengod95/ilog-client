import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';

export const getFileNames = (directory: string): string[] => {
  return fs.readdirSync(directory);
};

export const convertFileNameToSlug = (fileName: string): string => {
  return fileName.replace(/\.md$/, '');
};

export const getPostPathBySlug = (directory: string, slug: string) => {
  return path.join(directory, `${slug}.md`);
};

export const getPostFileByPath = (path: string) => {
  return fs.readFileSync(path, 'utf-8');
};

export const getMatterResultWithFile = (
  file:
    | string
    | {
        content: string;
      }
): matter.GrayMatterFile<string> => {
  return matter(file);
};

export const convertMarkdownToHTML = async (result: any) => {
  const processedContent = await remark().use(html).process(result);
  return processedContent.toString();
};
