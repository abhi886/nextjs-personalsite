/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from 'next-seo';
import React from 'react';
import '../src/styles/globalStyles.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Layout from '../src/components/LandingPageLayout';

function MyApp({ Component, pageProps }: AppProps): React.JSX.Element {
  const newLocal = true;
  return (
    <ThemeProvider
      enableSystem={newLocal}
      attribute="class"
      defaultTheme="light"
    >
      <Layout>
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
