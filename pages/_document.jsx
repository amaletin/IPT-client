import Document, { Head, Main, NextScript } from 'next/document';
import style from './_document.less';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="ru">
        <Head>
          <link rel="stylesheet" href="/static/global.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <body className={style.body}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
