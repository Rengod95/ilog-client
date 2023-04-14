import { Flex } from '@/components/UI/FlexBox';
import styled from '@emotion/styled';
import Image from 'next/image';

export const Root = styled.div`
  width: 250px;
  height: 310px;
`;

export const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 150ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 10px ${({ theme }) => theme.color.primary.main};
    z-index: 10;
  }
`;

export const Header = styled(Flex)`
  object-fit: cover;
  width: 100%;
  height: 50%;
  border-radius: 1px;
`;

export const Body = styled(Flex)`
  justify-content: space-around;
  //padding: 0 0.5rem 0 0.5rem;
  height: auto;
  color: ${({ theme }) => theme.color.text.primary};
`;

export const ResponsiveImage = styled(Image)`
  width: auto;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
  border-radius: 10px;
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
`;

export const TitleContainer = styled(Flex)`
  width: 100%;
  line-height: 2rem;
  margin-top: 1.2rem;
  font-size: ${({ theme }) => theme.size.font.xl};
`;
export const DateContainer = styled(Flex)`
  width: 100%;
  line-height: 2rem;
  color: ${({ theme }) => theme.color.text.disabled};
  font-size: ${({ theme }) => theme.size.font.md};
`;
