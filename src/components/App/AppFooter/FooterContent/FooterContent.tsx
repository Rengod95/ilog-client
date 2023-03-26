import React from 'react';
import * as S from './FooterContent.style';
import { Chip } from '@/components/UI/Chip';

export const FooterContent = () => {
  return (
    <S.GapWrapper flex='columnCenter'>
      <h2>Contact me</h2>
      <S.GapWrapper flex='rowCenter'>
        <Chip variant='outlined'>
          <span>KakaoTalk</span>
        </Chip>
        <Chip variant='outlined'>Discord</Chip>
      </S.GapWrapper>
      <h3>Email : aorwn970@gmail.com</h3>
      <small>Copyright © 2013 All Rights Reserved</small>
    </S.GapWrapper>
  );
};
