import Head from 'next/head';
import { useNavigation } from '@/util/hooks/UseNavigation.hook';
import { useEffect } from 'react';

export default function Home() {
  const { navigateTo } = useNavigation();

  useEffect(() => {
    navigateTo('/log');
  }, []);
  return <></>;
}
