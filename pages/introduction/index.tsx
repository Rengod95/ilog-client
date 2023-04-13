import React from 'react';
import { LogCard } from '@/components/Log/LogList/LogCard';
import { LogCardList } from '@/components/Log/LogList/LogCardList';

export const IntroductionPage = () => {
  return (
    <div>
      <LogCardList>{/*<LogCard></LogCard>*/}</LogCardList>
    </div>
  );
};

export default IntroductionPage;
