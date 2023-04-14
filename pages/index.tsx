import Head from 'next/head';
import { useNavigation } from '@/util/hooks/UseNavigation.hook';
import { useEffect } from 'react';
import { Spinner } from '@/components/UI/Spinner';
import * as S from '@/components/App/AppContent/AppContent.style';

export default function Home() {
  const { navigateTo } = useNavigation();

  useEffect(() => {
    navigateTo('/log');
  }, []);
  return (
    <S.Root>
      <S.Wrapper flex={'columnCenter'}>
        <S.HomeContainer>
          <Spinner></Spinner>
        </S.HomeContainer>
      </S.Wrapper>
    </S.Root>
  );
}
