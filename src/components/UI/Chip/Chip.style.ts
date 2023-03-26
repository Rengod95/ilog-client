import styled from '@emotion/styled';
import { Flex, FlexVariant } from '../FlexBox';
import { ChipProps } from '.';

export const Root = styled.div`
  width: auto;
  height: auto;
`;

export type WrapperProps = {
  variant: 'outlined' | 'filled';
  color?: { start: string; end: string };
};

export const Wrapper = styled(Flex)<WrapperProps>`
  position: relative;
  display: inline-flex;
  border-radius: 50rem;
  gap: 0.8rem;
  font-size: ${({ theme }) => theme.size.font.sm};
  /* border: 1px solid transparent; */
  padding: 0.3rem 0.5rem;
  color: #fff;
  cursor: pointer;
  ${({ theme, color, variant }) => {
    if (variant === 'filled') {
      return `
        background : linear-gradient(to right, ${
          color?.start || theme.color.success.main
        }, ${color?.end || theme.color.primary.main}) border-box;
      `;
    }
    return `
      border-width:4px;
      border-style:solid;
      border-image: linear-gradient(to right, ${
        color?.start || theme.color.success.main
      }, ${color?.end || theme.color.primary.main}); 
    `;
  }}
`;
