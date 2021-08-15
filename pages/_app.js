// pages/_app.js
import "../src/styles/globalStyles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
