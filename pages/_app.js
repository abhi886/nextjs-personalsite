// pages/_app.js
import "../src/styles/globalStyles.css";
import Layout from "../src/components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
