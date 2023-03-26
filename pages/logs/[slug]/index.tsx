import { GetStaticPaths, GetStaticProps } from 'next';
import {
  DEFAULT_LOG_FIELD,
  Log,
  LogData,
  getAllSlugs,
  getLogBySlug,
} from '@/components/Log/Log';
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

export default LogPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const { meta, content } = getLogBySlug(slug, DEFAULT_LOG_FIELD);

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
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  //get preserved paths with slugs
  const slugs = getAllSlugs();

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
};
