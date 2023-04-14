import React from 'react';
import { ItemList, Wrapper } from '.';
import Link from 'next/link';
import { Flex } from '@/components/UI/FlexBox';

export type NavItemData = {
  title: string;
  url: string;
};

export const NAV_ITEM_DATAS: Array<NavItemData> = [
  { title: '로그', url: '/log' },
  { title: '소개', url: '/introduction' },
  { title: '포트폴리오', url: '/portfolio' },
];

export const HeaderContent = () => {
  return (
    <Wrapper flex='rowStart' as='nav'>
      <Flex as='h2' flex='rowStart'>
        <Link href={'/'}>I-Log</Link>
      </Flex>
      <ItemList as='ul' flex='rowEnd'>
        {NAV_ITEM_DATAS.map((data) => {
          return (
            <Flex key={data.url} as={'li'} flex='columnCenter'>
              <Link href={data.url}>{data.title}</Link>
            </Flex>
          );
        })}
      </ItemList>
    </Wrapper>
  );
};

export default HeaderContent;
