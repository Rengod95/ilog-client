import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';

import html from 'remark-html';
import fs from 'fs';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';
import { DefaultLogFields } from '@/components/Log/Log';

//디렉토리 내의 모든 파일 이름 반환
export const getFileNames = (directory: string): string[] => {
  return fs.readdirSync(directory);
};

// md 파일 이름 분리
export const convertFileNameToSlug = (fileName: string): string => {
  return fileName.replace(/\.md$/, '');
};

// 디렉토리 주소와 마크다운 파일 이름을 통해 최종 md파일의 주소 가져오기
export const getPathBySlug = (directory: string, slug: string) => {
  return path.join(directory, `${slug}.md`);
};

/**
 *  return a file encoded to string with file path
 */
export const getFileByPath = (path: string) => {
  return fs.readFileSync(path, 'utf-8');
};

/**
 * extract markdown frontmatter and content
 * @returns {GrayMatterFile} {data, content}
 */
export const getFrontMatterWithMarkdown = <
  TInput extends matter.Input = string
>(
  file: TInput
): matter.GrayMatterFile<TInput> => {
  return matter(file);
};

/**
 *
 * @param file string type file
 * @returns converted to html wrapped string
 */

export const convertMarkdownToMDX = (file: string): string => {
  return unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkStringify)
    .processSync(file)
    .toString();
};

export const extractMetaFromMatter = <TInput extends matter.Input>(
  matter: matter.GrayMatterFile<TInput>,
  fields: string[]
) => {
  const result: DefaultLogFields = {};

  fields?.forEach((field: string) => {
    if (typeof matter.data[field] !== undefined) {
      result[field as keyof DefaultLogFields] = matter.data[field];
    }
  });

  return result;
};
