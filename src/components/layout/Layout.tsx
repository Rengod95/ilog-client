import styled from '@emotion/styled';
import { Flex } from '../UI/FlexBox';
import { ReactNode } from 'react';
import { AppHeader } from '../App/AppHeader';
import { HeaderContent } from '../App/AppHeader/HeaderContent';
import { AppContent } from '../App/AppContent';

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper flex='columnStart'>
      <AppHeader>
        <HeaderContent />
      </AppHeader>
      <AppContent>{children}</AppContent>
    </Wrapper>
  );
};
