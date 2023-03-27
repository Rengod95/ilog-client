import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { DEFAULT_THEME } from '@/styles/Theme';
import '@/styles/Config.css';
import { Layout } from '@/components/layout/Layout';
import localFont from '@next/font/local';

export const DEFAULT_FONT = localFont({
  src: '../public/font/Korail_Round_Gothic_Medium.ttf',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Layout className={DEFAULT_FONT.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
