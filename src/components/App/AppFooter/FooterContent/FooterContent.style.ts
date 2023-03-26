import { Flex } from '@/components/UI/FlexBox';
import styled from '@emotion/styled';

export const GapWrapper = styled(Flex)`
  gap: 0.8rem;

  & h1,
  h2,
  h3,
  h4 {
    line-height: 2rem;
  }
`;
