import {
  ErrorBoundary,
  FallBackProps,
  useUncaughtErrorHandler,
} from '@/components/ErrorBoundary';
import { BaseError } from '@/util';
import { Button } from '@/components/UI/Button';
import React from 'react';
// import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallBackProps) => {
  return (
    <div>
      {error?.message}
      <button onClick={resetErrorBoundary}>클릭시 리셋</button>
    </div>
  );
};

export const Bomb = () => {
  const { showBoundary } = useUncaughtErrorHandler();

  const t = new Promise(function (reslove) {
    setTimeout((reslove) => {
      showBoundary(new BaseError(''));
    }, 2000);
  });

  return <div></div>;
};

export const PortfolioPage = () => {
  const [errorShow, setErrorShow] = React.useState<boolean>(false);
  console.log('페이지 렌더');
  return (
    <div>
      <Button
        onClick={() => setErrorShow(true)}
        size={'large'}
        variant={'default'}
      >
        클릭 시 에러 생성
      </Button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error, info) => console.log(error, info.componentStack)}
        onReset={() => setErrorShow(false)}
      >
        {errorShow && <Bomb />}
      </ErrorBoundary>
    </div>
  );
};

export default PortfolioPage;
