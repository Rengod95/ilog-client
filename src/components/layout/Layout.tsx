import styled from '@emotion/styled';
import { Flex } from '../UI/FlexBox';
import { ReactNode } from 'react';
import { AppHeader } from '../App/AppHeader';
import { HeaderContent } from '../App/AppHeader/HeaderContent';
import { AppContent } from '../App/AppContent';
import { AppFooter } from '../App/AppFooter';
import { FooterContent } from '../App/AppFooter/FooterContent';

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export type LayoutProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <Wrapper flex='columnStart' className={className}>
      <AppHeader>
        <HeaderContent />
      </AppHeader>
      <AppContent>{children}</AppContent>
      <AppFooter>
        <FooterContent></FooterContent>
      </AppFooter>
    </Wrapper>
  );
};
