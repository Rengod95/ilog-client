import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { DEFAULT_THEME } from '@/styles/Theme';
import '@/styles/Config.css';
import { Layout } from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
