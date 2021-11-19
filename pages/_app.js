import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/button.css";
import "../styles/shadows.css";
import transaltions from "../data/translations";
import { AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";

function MyApp({ Component, pageProps }) {
  const [langPolish, setLangPolish] = useState(true);
  const [translationsObj, setTranslations] = useState(transaltions.pl);
  const switchLang = () => {
    const lang = cookieCutter.get("lang");

    if (!lang) {
      cookieCutter.set("lang", "pl");
      setLangPolish(true);
    }

    if (lang == "pl") {
      cookieCutter.set("lang", "en");
      setLangPolish(false);
    } else if (lang == "en") {
      cookieCutter.set("lang", "pl");
      setLangPolish(true);
    }
  };

  useEffect(() => {
    const lang = cookieCutter.get("lang");
    lang == "en" ? setLangPolish(false) : setLangPolish(true);
  }, []);

  useEffect(() => {
    const lang = cookieCutter.get("lang");
    lang == "pl"
      ? setTranslations(transaltions.pl)
      : setTranslations(transaltions.en);
  }, [langPolish]);

  pageProps = { translationsObj, ...pageProps };
  return (
    <Layout
      langPolish={langPolish}
      switchLang={switchLang}
      translationsObj={translationsObj}
    >
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
