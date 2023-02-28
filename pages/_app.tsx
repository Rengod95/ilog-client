import styled from '@emotion/styled';
import { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

const S = styled.div;
