import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';

//디렉토리 내의 모든 파일 이름 반환
export const getFileNames = (directory: string): string[] => {
  return fs.readdirSync(directory);
};

// md 파일 이름 분리
export const convertFileNameToSlug = (fileName: string): string => {
  return fileName.replace(/\.md$/, '');
};

// 디렉토리 주소와 마크다운 파일 이름을 통해 최종 md파일의 주소 가져오기
export const getPostPathBySlug = (directory: string, slug: string) => {
  return path.join(directory, `${slug}.md`);
};

//주소를 통해 파일 불러오기
export const getPostFileByPath = (path: string) => {
  return fs.readFileSync(path, 'utf-8');
};

//frontMatter 추출하기
export const getMatterResultWithFile = (
  file:
    | string
    | {
        content: string;
      }
): matter.GrayMatterFile<string> => {
  return matter(file);
};

//마크다운 데이터를 HTML로 파싱
export const convertMarkdownToHTML = async (result: any) => {
  const processedContent = await remark().use(html).process(result);
  return processedContent.toString();
};
