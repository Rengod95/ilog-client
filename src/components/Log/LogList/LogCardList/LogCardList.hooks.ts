import { useInfiniteQuery } from '@tanstack/react-query';
import { BaseResponse, S3Document } from '@/types';
import { APIPathMapper, BaseError, createApiEndpoint, request } from '@/util';

export const GET_INFINITE_LOG_LIST_QUERY_KEY = 'log';
export const DEFAULT_POST_ITEM_LIMIT = 10;
export const DEFAULT_POST_ITEM_SKIP = 10;

export type getLogListResponse = BaseResponse<S3Document[]>;

export const getInfiniteLogList = async (
  pageParam: number
): Promise<{ result: S3Document[]; pageParam: number }> => {
  const param = pageParam ?? 1;

  const skipCount = (param - 1) * DEFAULT_POST_ITEM_SKIP;
  console.log(skipCount);
  const query = {
    skip: skipCount,
    limit: DEFAULT_POST_ITEM_LIMIT,
  };

  const url = createApiEndpoint(APIPathMapper.getLogList as string, query);

  const { result } = await request<getLogListResponse>(url);

  return { result, pageParam: param };
};

export const useInfiniteLogList = () => {
  const query = useInfiniteQuery<
    { result: S3Document[]; pageParam: number },
    BaseError
  >({
    queryKey: [GET_INFINITE_LOG_LIST_QUERY_KEY],
    queryFn: ({ pageParam = 1 }) => getInfiniteLogList(pageParam),
    getNextPageParam: (last) => {
      return last.pageParam + 1;
    },
  });

  return query;
};
