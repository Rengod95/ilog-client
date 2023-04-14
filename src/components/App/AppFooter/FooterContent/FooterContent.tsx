import React from 'react';
import * as S from './FooterContent.style';
import { Chip } from '@/components/UI/Chip';
import Link from 'next/link';
import { useNavigation } from '@/util/hooks/UseNavigation.hook';

export const DISCORD_LINK = 'https://discord.gg/abrhZFVcrp';
export const KAKAOTALK_LINK = 'https://open.kakao.com/o/sgaSi4ef';
export const FooterContent = () => {
  const { navigateTo } = useNavigation();
  return (
    <S.GapWrapper flex='columnCenter'>
      <h2>Contact me</h2>
      <S.GapWrapper flex='rowCenter'>
        <Chip variant='outlined' onClick={() => navigateTo(KAKAOTALK_LINK)}>
          Kakao Talk
        </Chip>
        <Chip variant='outlined' onClick={() => navigateTo(DISCORD_LINK)}>
          Discord
        </Chip>
      </S.GapWrapper>
      <h3>Email : aorwn970@gmail.com</h3>
      <small>Copyright © 2013 All Rights Reserved</small>
    </S.GapWrapper>
  );
};
