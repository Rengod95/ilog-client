import React from 'react';
import { useInfiniteLogList } from '@/components/Log/LogList/LogCardList/LogCardList.hooks';
import { LogCard } from '@/components/Log/LogList/LogCard';
import * as S from './LogCardList.styles';

export type LogCardListProps = React.PropsWithoutRef<React.PropsWithChildren>;
export const LogCardList = ({ children }: LogCardListProps) => {
  const query = useInfiniteLogList();
  const error = query.error?.message;
  return (
    <S.Root flex={'rowCenter'}>
      <S.Wrapper flex={'columnStart'}>
        <S.IntroWrapper flex={'rowStart'}>
          <h1>Logs</h1>
        </S.IntroWrapper>
        <S.LogItemWrapper flex={'rowStart'}>
          {query.isLoading ? (
            <div>is loading...</div>
          ) : query.isError ? (
            <div>{error}</div>
          ) : (
            query.data.pages.map((page) => {
              return page.result.map((doc) => {
                return (
                  <LogCard
                    ETag={doc.ETag}
                    Url={doc.Url}
                    title={doc.Key}
                    lastModified={doc.LastModified}
                    key={doc.ETag}
                  />
                );
              });
            })
          )}
        </S.LogItemWrapper>
      </S.Wrapper>
    </S.Root>
  );
};
