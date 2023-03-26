import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const PageRoot = styled(Flex)`
  width: 100%;
  height: auto;
`;

export const PageWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

export const Wrapper = styled(Flex)``;

export const LogHeader = styled.section`
  width: 100%;
  min-height: 20rem;
  background-color: ${({ theme }) => theme.color.background.paper};
`;

export const HeaderWrapper = styled(Flex)`
  padding: 1.2rem;
  min-height: inherit;
  text-align: center;

  color: ${({ theme }) => theme.color.primary.dark};
  gap: ${({ theme }) => theme.size.font.sm};
  & {
    h1 {
      padding: 2rem 0rem 2rem 0.5rem;
      font-size: 3.25rem;
      text-align: start;
      flex-grow: 3;
      color: ${({ theme }) => theme.color.primary.light};
      @media (max-width: 768px) {
        white-space: pre-wrap;
        font-size: 3rem;
      }
      @media (max-width: 634px) {
        white-space: pre-wrap;
        font-size: 2.25rem;
      }
    }
    h2 {
      font-size: ${({ theme }) => theme.size.font.xxl};
      color: ${({ theme }) => theme.color.primary.light};
    }

    img {
      width: 100%;
      max-width: 560px;
      max-height: 300px;
    }
    h3 {
      flex-grow: 1;
    }
    h5 {
      flex-grow: 1;
    }
  }
`;

export const LogBody = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.paper};
`;
export const LogFooter = styled.section`
  width: 100%;
  height: auto;
`;

export const FooterWrapper = styled(Flex)`
  padding: 1.2rem;
  gap: 0.8rem;
  color: ${({ theme }) => theme.color.success.light};
  background-color: ${({ theme }) => theme.color.background.paper};
  border-top: 1px dashed ${({ theme }) => theme.color.success.dark};
  border-bottom: 1px dashed ${({ theme }) => theme.color.success.dark};
  @media (max-width: 480px) {
    .tags {
      display: none;
    }
  }
`;
export const ChipContainer = styled(Flex)`
  gap: 0.8rem;
  height: auto;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    display: none;
  }
`;
