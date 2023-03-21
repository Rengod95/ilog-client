import { HeaderContent } from '@/components/commons/HeaderContent';
import { Layout } from '@/components/App';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { DEFAULT_THEME } from '@/styles/Theme';
import '@/styles/Config.css';

import { AppHeader } from '@/components/App/AppHeader';
import { AppContent } from '@/components/App/AppContent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Layout>
        <AppHeader>
          <HeaderContent />
        </AppHeader>
        <AppContent>
          <Component {...pageProps} />
        </AppContent>
      </Layout>
    </ThemeProvider>
  );
}
