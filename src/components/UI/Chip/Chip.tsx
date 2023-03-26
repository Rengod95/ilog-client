import React from 'react';
import * as S from './Chip.style';

export type ChipProps = {
  variant: 'outlined' | 'filled';
  color?: { start: string; end: string };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Chip = ({ color, variant, children }: ChipProps) => {
  return (
    <S.Wrapper as='div' flex='rowCenter' color={color} variant={variant}>
      {children}
    </S.Wrapper>
  );
};
