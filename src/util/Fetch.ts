import { BaseError } from '.';

export const request = async <TResponse>(
  url: string,
  options: RequestInit = {}
): Promise<TResponse> => {
  return fetch(url, options)
    .then((res) => res.json())
    .catch((error: Error) => {
      throw new BaseError(error?.message);
    });
};
