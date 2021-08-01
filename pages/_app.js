import Head from 'next/head';

import Layout from "../layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
          <title>Events Tracker</title>
          <meta name="viewport"content="initial-scale=1.0, width=device-width"/>
          <meta name="description" content="Find all booming events here!" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
