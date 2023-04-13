import React from 'react';
import * as S from './FooterContent.style';
import { Chip } from '@/components/UI/Chip';

export const DISCORD_LINK = 'https://discord.gg/abrhZFVcrp';
export const KAKAOTALK_LINK = 'https://open.kakao.com/o/sgaSi4ef';
export const FooterContent = () => {
  return (
    <S.GapWrapper flex='columnCenter'>
      <h2>Contact me</h2>
      <S.GapWrapper flex='rowCenter'>
        <Chip variant='outlined'>
          <a href={KAKAOTALK_LINK} target={'_blank'} rel='noopener noreferrer'>
            KakaoTalk
          </a>
        </Chip>
        <Chip variant='outlined'>
          <a href={DISCORD_LINK} target={'_blank'} rel='noopener noreferrer'>
            Discord
          </a>
        </Chip>
      </S.GapWrapper>
      <h3>Email : aorwn970@gmail.com</h3>
      <small>Copyright © 2013 All Rights Reserved</small>
    </S.GapWrapper>
  );
};
