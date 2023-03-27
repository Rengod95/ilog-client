import React from 'react';
import { MDXLoader } from '../MDX';
import { LogData } from '.';
import * as S from './Log.style';
import { Chip } from '@/components/UI/Chip';

export const Log = ({ meta, content }: LogData) => {
  return (
    <S.Wrapper as={'main'} flex='columnStart'>
      <S.LogHeader>
        <S.HeaderWrapper flex='columnCenter'>
          <h1>{meta.title}</h1>
          <img src='' alt='' />
          <h3>{meta.date ?? 'no date'}</h3>
          <h5>{meta.author ?? 'no author'}</h5>
        </S.HeaderWrapper>
      </S.LogHeader>
      <S.LogBody>
        <MDXLoader {...content} />
      </S.LogBody>
      <S.LogFooter>
        <S.FooterWrapper flex='columnCenter'>
          <h2 className='tags'>Tags</h2>
          <S.ChipContainer flex='rowCenter'>
            {meta.tags?.map((tag, idx) => {
              return (
                <Chip variant={'outlined'} key={tag + idx}>
                  {tag}
                </Chip>
              );
            })}
          </S.ChipContainer>
        </S.FooterWrapper>
      </S.LogFooter>
    </S.Wrapper>
  );
};
