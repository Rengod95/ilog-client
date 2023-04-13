import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import {
  APIPathMapper,
  convertMarkdownToMDX,
  createApiEndpoint,
  extractMetaFromMatter,
  GetAPIPath,
  getFrontMatterWithMarkdown,
  request,
} from '@/util';
import { BaseResponse, ETag, S3Document } from '@/types';
import { DEFAULT_LOG_FIELDS, Log, LogData } from '@/components/Log/Log';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';
import * as S from '@/components/Log/Log/Log.style';

export const CodeRehypeOptions = {
  theme: 'one-dark-pro',
  keepBackground: false,
};

export type LogPageProps = {
  data: LogData;
};
export const LogPage = ({ data }: LogPageProps) => {
  return (
    <S.PageRoot flex='columnStart'>
      <S.PageWrapper>
        <Log {...data}></Log>
      </S.PageWrapper>
    </S.PageRoot>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug: ETag = ctx.params?.slug as string;
  const getPath = APIPathMapper.getSingleLog as GetAPIPath;
  const endpoint = createApiEndpoint(getPath(slug));

  console.log(endpoint);

  const { result } = await request<BaseResponse<S3Document>>(endpoint);
  const res = await fetch(result.Url);
  const mdText = await res.text();

  const frontmatter = getFrontMatterWithMarkdown(mdText);
  const meta = extractMetaFromMatter(frontmatter, DEFAULT_LOG_FIELDS);

  const content = convertMarkdownToMDX(frontmatter.content);
  const serialized = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, CodeRehypeOptions]],
      format: 'mdx',
    },
  });

  return {
    props: {
      data: JSON.parse(JSON.stringify({ content: serialized, meta })),
    },
    revalidate: 60 * 60 * 24,
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const path = APIPathMapper.getLogList as string;

  const endpoint = createApiEndpoint(path, {
    skip: '0',
    limit: '0',
  });
  console.log('paths-endpoint: ', endpoint);
  const { result: docs } = await request<BaseResponse<Array<S3Document>>>(
    endpoint
  );
  console.log('paths-docs-result:', docs);
  const params = docs.map((doc) => {
    return {
      params: { slug: doc.ETag },
    };
  });

  console.log('paths-params:', params);

  return {
    paths: params,
    fallback: false,
  };
};

export default LogPage;
