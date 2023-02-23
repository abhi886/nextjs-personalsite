/* eslint-disable react/jsx-props-no-spreading */
// pages/_app.js
import React from 'react';
import '../src/styles/globalStyles.css';
import { DefaultSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      {' '}
      <DefaultSeo
        twitter={{
          handle: '@Abhishe19658428',
          site: 'abhishekhmaharjan.com',
          cardType: 'summary_large_image',
        }}
      />
      <ThemeProvider enableSystem="true" attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
