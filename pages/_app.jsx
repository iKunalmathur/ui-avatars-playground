import "../styles/globals.css";
import Seo from "../components/SEO";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* SEO Component*/}
      <Seo />
      {/* /SEO Component*/}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
