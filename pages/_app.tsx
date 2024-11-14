import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import { appWithTranslation, useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';



function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common');
  const navItems: NavItems = [
    { title: 'Lanplayer', href: '/' },
    { title: t('navbar.download'), href: '/download' },
    { title: t('navbar.pricing'), href: '/pricing' },
    { title: t('navbar.contact'), href: '/contact' }
  ]
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      {/* Set localStorage to force light mode */}
      <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  localStorage.setItem('nextColorMode', 'light');
                } catch (e) {}
              `,
            }}
          />
          {/* Then apply the ColorModeScript */}
      <ColorModeScript/>;
      <GlobalStyle />

      <Providers navItems={navItems}>
        <Modals />
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children, navItems }: PropsWithChildren<T> & { navItems: NavItems }) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default appWithTranslation(MyApp);
