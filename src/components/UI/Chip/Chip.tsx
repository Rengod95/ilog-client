import React from 'react';
import * as S from './Chip.style';
import { InheritableProps, PropsOf } from '@/types';

export type ChipProps = {
  variant: 'outlined' | 'filled';
  color?: { start: string; end: string };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Chip = ({ color, variant, children }: ChipProps) => {
  return (
    <S.Root>
      <S.Wrapper flex='rowCenter' color={color} variant={variant}>
        {children}
      </S.Wrapper>
    </S.Root>
  );
};
