import { Flex } from '@/components/UI/FlexBox';
import styled from '@emotion/styled';

export const Root = styled.footer`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled(Flex)`
  width:100%:
  height:100%;
  min-height: 300px;
  margin-top:5rem;
  background-color: ${({ theme }) => theme.color.background.paper};
  color: ${({ theme }) => theme.color.text.primary}
`;
