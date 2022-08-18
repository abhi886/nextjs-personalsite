// pages/_app.js
import "../src/styles/globalStyles.css";
import Layout from "../src/components/LandingPageLayout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      {" "}
      <DefaultSeo
        // openGraph={{
        //   type: "website",
        //   locale: "en_IE",
        //   url: "abhishekhmaharjan.com",
        //   site_name: "Abhishekh Maharjans Personal Website",
        // }}
        twitter={{
          handle: "@Abhishe19658428",
          site: "abhishekhmaharjan.com",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
