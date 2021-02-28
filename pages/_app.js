/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import theme from '../src/components/theme';
import GlobalStyle from '../src/components/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Millena Brito Bomtempo</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.defaultProps = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({}),
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]),
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.elementType,
    PropTypes.func]),
};
