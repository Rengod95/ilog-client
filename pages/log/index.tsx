import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import {
  GET_INFINITE_LOG_LIST_QUERY_KEY,
  getInfiniteLogList,
  LogCardList,
} from '@/components/Log/LogList/LogCardList';

export const LogListPage = () => {
  return (
    <>
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
