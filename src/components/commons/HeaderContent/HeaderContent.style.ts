import { Flex } from '@/components/FlexBox';
import styled from '@emotion/styled';

export const Wrapper = styled(Flex)`
  height: 100%;
  padding: 0 1.2rem 0 1.2rem;
  gap: 1.2rem;
  h2 {
    width: auto;
    white-space: nowrap;
    height: auto;
    ${({ theme }) => {
      return `
            font-size: ${theme.size.font.xl};
            color:${theme.color.primary.main};
          `;
    }}
  }
`;

export const ItemList = styled(Flex)`
  width: 100%;
  height: 100%;
  gap: 1.3rem;

  li {
    width: auto;
    height: 100%;
    a {
      white-space: nowrap;
      height: auto;
      width: 100%;
      transition: all 400ms ease;

      ${({ theme }) => {
        return `
            font-size: ${theme.size.font.lg};
            color:${theme.color.text.primary};
          `;
      }}

      &:hover {
        ${({ theme }) => {
          return `
            color:${theme.color.text.hint}
          `;
        }}
      }
    }
  }
`;
