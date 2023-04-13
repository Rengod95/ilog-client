import { Key } from '@/types';

export type GetAPIPath = <T = unknown>(args: T) => string;

export type APIPathMapperValue = unknown;
export type APIPathMapperKey = 'getLogList' | 'getSingleLog';
export type ApiMap = {
  [TKey in APIPathMapperKey]: string | GetAPIPath;
};

export type QueryStringObject = {
  [TKey: string]: any;
};
export const APIPathMapper: ApiMap = {
  getLogList: '/log/list',
  getSingleLog: ((key: Key) => `/log/${key}`) as GetAPIPath,
};

export const getApiUrlHost = () => {
  return process.env.NEXT_PUBLIC_API_URL;
};

export const createQueryString = (queryObject: QueryStringObject) => {
  let result = '?';

  for (const key in queryObject) {
    result += `${key}=${queryObject[key]}&`;
  }

  return result;
};

export const createApiEndpoint = (
  path: string,
  _query?: QueryStringObject
): string => {
  const host = getApiUrlHost();

  if (!!_query) {
    const query = createQueryString(_query);
    return host + path + query;
  }

  return host + path;
};
