import styled from '@emotion/styled';
import { Flex, FlexVariant } from '../FlexBox';
import { ChipProps } from '.';

export type WrapperProps = {
  variant: 'outlined' | 'filled';
  color?: { start: string; end: string };
};

export const Wrapper = styled(Flex)<WrapperProps>`
  display: inline-flex;
  position: relative;
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.size.font.sm};
  color: #fff;
  border-radius: 50px;
  & > a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.size.font.xs};
    padding: 0.5rem 1rem;
  }

  ${({ theme, color, variant }) => {
    if (variant === 'filled') {
      return `
        background: linear-gradient(135deg, ${
          color?.start || theme.color.success.main
        }, ${color?.end || theme.color.primary.main});
      `;
    }
    return `
      ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50px;
      border: 2px solid transparent;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      background: linear-gradient(135deg, ${
        color?.start || theme.color.success.main
      }, ${color?.end || theme.color.primary.main}) border-box;
    }
    `;
  }}
`;
