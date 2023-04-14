import React from 'react';
import * as S from './Chip.style';

export type ChipProps = {
  variant: 'outlined' | 'filled';
  color?: { start: string; end: string };
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Chip = ({
  color,
  variant,
  children,
  onClick: onClickHandler,
}: ChipProps) => {
  return (
    <S.Wrapper
      onClick={onClickHandler}
      flex='rowCenter'
      color={color}
      variant={variant}
    >
      {children}
    </S.Wrapper>
  );
};
