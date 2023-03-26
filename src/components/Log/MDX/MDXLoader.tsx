import React from 'react';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import * as S from './MDXLoader.style';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export const MDXErrorFallback = () => {
  return (
    <div>
      <h2>게시물 데이터 로딩 중 오류가 발생하였습니다.</h2>
    </div>
  );
};

export const MDXLoader = (props: MDXRemoteProps) => {
  return (
    <S.MarkdownWrapper>
      <div className='md'>
        <ErrorBoundary FallbackComponent={MDXErrorFallback}>
          <MDXRemote {...props} />
        </ErrorBoundary>
      </div>
    </S.MarkdownWrapper>
  );
};
