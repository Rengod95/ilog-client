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
  background-color: ${({ theme }) => theme.color.background.paper};
`;

export const HeaderWrapper = styled(Flex)`
  padding: 1.6rem;
  min-height: inherit;
  text-align: left;

  color: ${({ theme }) => theme.color.primary.dark};
  gap: ${({ theme }) => theme.size.font.sm};
  & {
    h1 {
      line-height: 5rem;
      font-size: 3.25rem;
      text-align: start;
      width: 100%;
      height: auto;

      @media (max-width: 768px) {
        white-space: pre-wrap;
        font-size: 3rem;
      }
      @media (max-width: 634px) {
        white-space: pre-wrap;
        font-size: 2.25rem;
      }
    }
    img {
      width: 100%;
      height: auto;
      max-width: 560px;
      max-height: 300px;
    }
    h3 {
      text-align: end;
      color: ${({ theme }) => theme.color.text.disabled};
      width: 90%;
    }
    h5 {
      text-align: end;
      color: ${({ theme }) => theme.color.text.disabled};
      width: 90%;
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
`;
export const ChipContainer = styled(Flex)`
  width: 100%;
  gap: 0.8rem;
  flex-wrap: wrap;
`;
