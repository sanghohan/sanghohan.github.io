import Document, { Head, Html, Main, NextScript } from 'next/document';
import { MetaHTMLAttributes } from 'react';

/** 첫 페인트 전에 저장된 테마를 적용하여 화면이 번쩍이지 않게 한다. */
const THEME_BOOTSTRAP =
  "(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();";

/** @types/react 16 에는 meta 의 media 속성 타입이 없어 우회한다. */
function themeColor(content: string, media: string): MetaHTMLAttributes<HTMLMetaElement> {
  return { name: 'theme-color', content, media } as MetaHTMLAttributes<HTMLMetaElement>;
}

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          {/* eslint-disable react/jsx-props-no-spreading */}
          <meta {...themeColor('#fbfaf8', '(prefers-color-scheme: light)')} />
          <meta {...themeColor('#0f0f11', '(prefers-color-scheme: dark)')} />
          {/* eslint-enable react/jsx-props-no-spreading */}
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
