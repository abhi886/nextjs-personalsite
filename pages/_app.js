// pages/_app.js
import "../src/styles/globalStyles.css";
import Layout from "../src/components/LandingPageLayout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
