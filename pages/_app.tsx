import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import { DEFAULT_THEME } from '@/styles/Theme';
import '@/styles/Config.css';
import { Layout } from '@/components/layout/Layout';
import localFont from '@next/font/local';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export const DEFAULT_FONT = localFont({
  src: '../public/font/AppleSDGothicNeoRegular.otf',
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={DEFAULT_THEME}>
          <Layout className={DEFAULT_FONT.className}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
