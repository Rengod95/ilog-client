import React, { PropsWithChildren } from 'react';
import * as S from './AppFooter.style';

export type AppFooterProps = {
  children?: React.ReactNode;
};

export const AppFooter = ({ children }: AppFooterProps) => {
  return (
    <S.Root>
      <S.Wrapper flex='columnCenter'>{children}</S.Wrapper>
    </S.Root>
  );
};
