import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/button.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
