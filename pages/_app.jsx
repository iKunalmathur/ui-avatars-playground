import Seo from "../components/Seo";
import "../styles/globals.css";

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
