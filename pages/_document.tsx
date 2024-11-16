import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale || 'en';
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        locale,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { locale } = this.props;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lanplayer.app';
    const supportedLocales = ['en', 'ar', 'fr','ja','ko','ru','zh','vi']; 
    const currentPath = this.props.__NEXT_DATA__.page;
    return (
      <Html lang="en">
        <Head>
        {supportedLocales.map((lang) => (
            <link
              key={lang}
              rel="alternate"
              hrefLang={lang}
              href={`${baseUrl}/${lang}${currentPath}`}
            />
          ))}
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${baseUrl}${currentPath}`}
          />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-SMW8CBW9TK"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SMW8CBW9TK');
              `,
            }}
          />
        </Head>
        <body className="next-light-theme">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
