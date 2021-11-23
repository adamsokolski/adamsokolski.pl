import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/button.css";
import "../styles/shadows.css";
import transaltions from "../data/translations";
import { AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  // Google Analytics
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Lang switcher
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
    if (!lang) {
      cookieCutter.set("lang", "pl");
    }
  }, []);

  useEffect(() => {
    const lang = cookieCutter.get("lang");
    lang == "pl"
      ? setTranslations(transaltions.pl)
      : setTranslations(transaltions.en);
  }, [langPolish]);

  pageProps = { translationsObj, ...pageProps };
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout
        langPolish={langPolish}
        switchLang={switchLang}
        translationsObj={translationsObj}
      >
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </Layout>
    </>
  );
}

export default MyApp;
