import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  public render() {
    return (
      <html lang="ru">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
          <link rel="manifest" href="/static/icons/site.webmanifest" />
          <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#222222" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" type="text/css" href="/static/vendor/input_range.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          @font-face {
            font-family: 'Circe';
            src: url("/static/fonts/Circe/Circe_1.otf") format("opentype");
            font-weight: normal;
            font-style: normal;
            font-display: fallback
          }

          @font-face {
            font-family: 'Circe Bold';
            src: url("/static/fonts/Circe/CirceBold_1.otf") format("opentype");
            font-weight: bold;
            font-style: normal;
            font-display: fallback
          }

          @font-face {
            font-family: 'Circe Light';
            src: url("/static/fonts/Circe/CIRCELIGHT_0.OTF") format("opentype");
            font-weight: lighter;
            font-style: normal;
            font-display: fallback
          }

          @font-face {
            font-family: 'Open Sans';
            src: url("/static/fonts/OpenSans/OpenSans-Regular.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
            font-display: fallback
          }

          body {
            margin: 0;
            font-family: 'OpenSans', sans-serif;
          }

          body.locked {
            height: 100%;
            overflow: hidden;
            width: 100%;
            position: fixed;
          }

          .container {
            max-width: 1366px;
            padding: 0 15px;
            margin: 0 auto;
          }
        `}</style>
      </html>
    );
  }
}
