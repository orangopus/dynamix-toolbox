import "../styles.css";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="../static/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
