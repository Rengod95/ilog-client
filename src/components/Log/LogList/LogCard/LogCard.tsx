import React from 'react';

import * as S from '.';
import { ETag, Key, LastModified } from '@/types';
import { useNavigation } from '@/util/hooks/UseNavigation.hook';
import { normalizeKey } from '@/util';
import { getParsedLogDate } from '.';
import default_thumbnail from '../../../../../public/default_thumbnail.png';

export type LogCardProps = {
  title: Key;
  lastModified: LastModified;
  ETag: ETag;
  Url: string;
  children?: React.ReactNode;
};

const DEFAULT_TITLE = 'NO TITLE EXIST';
const DEFAULT_LAST_MODIFIED = 'NO MODIFIED DATE';

export const LogCard = ({ title, lastModified, ETag }: LogCardProps) => {
  const { navigateTo } = useNavigation();

  return (
    <S.Root
      onClick={() => {
        navigateTo(`/log/${ETag}`);
      }}
    >
      <S.Wrapper flex={'columnStart'}>
        <S.Header as={'section'} flex={'rowCenter'}>
          <S.ResponsiveImage
            src={'/default_thumbnail.png'}
            alt={''}
            width={0}
            height={0}
            quality={100}
            loading={'lazy'}
            unoptimized={true}
          />
        </S.Header>
        <S.Body as={'section'} flex={'columnStart'}>
          <S.TitleContainer flex={'rowStart'}>
            {normalizeKey(title) || DEFAULT_TITLE}
          </S.TitleContainer>
          <S.DateContainer flex={'rowStart'}>
            {getParsedLogDate(lastModified) || DEFAULT_LAST_MODIFIED}
          </S.DateContainer>
        </S.Body>
      </S.Wrapper>
    </S.Root>
  );
};
