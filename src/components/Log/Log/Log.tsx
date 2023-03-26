import React from 'react';
import { MDXLoader } from '../MDX';
import { LogData } from '.';
import * as S from './Log.style';
import { Button } from '@/components/UI/Button';
import { Flex } from '@/components/UI/FlexBox';
import { Chip } from '@/components/UI/Chip';

const DEFAULT_TAGS = ['asd', 'asdf', 'asd', 'asdf', 'asd', 'asdf'];

export const Log = ({ meta, content }: LogData) => {
  return (
    <>
      <S.Root>
        <S.Wrapper flex='columnStart'>
          <S.LogHeader>
            <S.HeaderWrapper flex='columnCenter'>
              <h1>{meta.title}</h1>
              <h3>{meta.date ?? 'no date'}</h3>
              <h3>{meta.author ?? 'no author'}</h3>
              <Flex as='div' flex='rowCenter'>
                {['asd', 'asdf', 'asd', 'asdf', 'asd', 'asdf'].map((tag) => {
                  return <Chip variant={'outlined'}>{tag}</Chip>;
                })}
              </Flex>
            </S.HeaderWrapper>
          </S.LogHeader>
          <S.LogBody>
            <MDXLoader {...content} />
          </S.LogBody>
          <S.LogFooter></S.LogFooter>
        </S.Wrapper>
      </S.Root>
    </>
  );
};
