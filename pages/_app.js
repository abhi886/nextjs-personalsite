/* eslint-disable react/jsx-props-no-spreading */
// pages/_app.js
import React from 'react';
import '../src/styles/globalStyles.css';
import { DefaultSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import Layout from '../src/components/LandingPageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem="true" attribute="class" defaultTheme="dark">
      <Layout>
        {' '}
        <DefaultSeo
          twitter={{
            handle: '@Abhishe19658428',
            site: 'abhishekhmaharjan.com',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
