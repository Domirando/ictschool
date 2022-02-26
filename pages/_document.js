import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        <link rel="shortcut icon" href={"favicon.ico"} />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={"/favicon/favicon-152-precomposed.png"}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={"/favicon/favicon-144-precomposed.png"}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={"/favicon/favicon-120-precomposed.png"}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={"/favicon/favicon-114-precomposed.png"}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={"/favicon/favicon-180-precomposed.png"}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={"/favicon/favicon-72-precomposed.png"}
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={"/favicon/favicon-57.png"}
        />
        <link rel="icon" sizes="32x32" href={"/favicon/favicon-32.png"} />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/favicon-144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href={"/favicon/manifest.json"} />
        <link rel="icon" sizes="192x192" href={"/favicon/favicon-192.png"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
