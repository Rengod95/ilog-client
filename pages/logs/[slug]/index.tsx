import {
  DEFAULT_LOG_FIELD,
  Log,
  getAllSlugs,
  getLogBySlug,
} from '@/components/Log';
import { convertMarkdownToHTML } from '@/util';
import { GetStaticPaths, GetStaticProps } from 'next';

export type LogProps = {
  data: Log;
};

const LogPage = ({ data }: LogProps) => {
  // console.log('데이터', data);
  return (
    <div>
      <h3>{data.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data?.content || '' }}></div>
    </div>
  );
};

export default LogPage;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  //get slug
  const slug = ctx.params?.slug as string;
  //get Log
  const log = getLogBySlug(slug, DEFAULT_LOG_FIELD);
  // convert content to html
  const content = await convertMarkdownToHTML(log.content);
  // parse datas
  const parsed = JSON.parse(JSON.stringify({ ...log, content }));

  return {
    props: {
      data: parsed,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  //set preserved paths with slugs
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
