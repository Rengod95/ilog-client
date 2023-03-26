import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const PageRoot = styled(Flex)`
  width: 100%;
  height: auto;
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

export const Root = styled.main`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled(Flex)``;

export const LogHeader = styled.section`
  width: 100%;
  height: auto;
  min-height: 20rem;
  background-color: ${({ theme }) => theme.color.background.paper};
`;

export const HeaderWrapper = styled(Flex)`
  padding: 1.2rem;
  min-height: inherit;
  text-align: center;
  color: ${({ theme }) => theme.color.primary.light};
  gap: ${({ theme }) => theme.size.font.xl};
  & {
    h1 {
      font-size: 2.5rem;
      white-space: nowrap;
      @media (max-width: 720px) {
        white-space: pre-wrap;
      }
    }
    h2 {
      font-size: ${({ theme }) => theme.size.font.xxl};
      color: ${({ theme }) => theme.color.primary.dark};
    }
    h3 {
      font-size: ${({ theme }) => theme.size.font.xl};
      color: ${({ theme }) => theme.color.primary.dark};
    }
  }
`;

export const LogBody = styled.section`
  width: 100%;
  height: auto;
`;
export const LogFooter = styled.section`
  width: 100%;
  height: auto;
`;
