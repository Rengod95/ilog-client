import styled from '@emotion/styled';
import { Flex } from '@/components/UI/FlexBox';

export const Root = styled(Flex)`
  height: 100%;
  padding: 2rem;
`;

export const Wrapper = styled(Flex)``;

export const IntroWrapper = styled(Flex)`
  width: 100%;
  & h1 {
    width: 100%;
    height: 5rem;
    margin-left: 1rem;
    font-size: 3rem;
    color: ${({ theme }) => theme.color.text.primary};
  }
  margin-bottom: 1rem;
`;

export const LogItemWrapper = styled(Flex)`
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
