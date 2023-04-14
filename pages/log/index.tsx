import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import {
  GET_INFINITE_LOG_LIST_QUERY_KEY,
  getInfiniteLogList,
  LogCardList,
} from '@/components/Log/LogList/LogCardList';
import Head from 'next/head';

export const LogListPage = () => {
  return (
    <>
      <Head>
        <title>I-log</title>
        <meta name='description' content='현직 대학생의 개발기 I-Log' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LogCardList></LogCardList>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    [GET_INFINITE_LOG_LIST_QUERY_KEY],
    ({ pageParam = 1 }) => getInfiniteLogList(pageParam)
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default LogListPage;
