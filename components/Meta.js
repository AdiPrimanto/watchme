/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

export default function Meta({ keywords, description, title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="{keywords}" />
      <meta name="description" content="{description}" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "WatchMe",
  keywords: "movie app, free movies, popular movies",
  description: "watch movies for free",
};
