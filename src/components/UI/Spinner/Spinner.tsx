import React from 'react';
import * as S from './Spinner.styles';
export const Spinner = () => {
  return (
    <S.Container>
      <S.SpinnerFrame>
        <S.SpinnerCover></S.SpinnerCover>
        <S.SpinnerBar></S.SpinnerBar>
      </S.SpinnerFrame>
    </S.Container>
  );
};

export default Spinner;
