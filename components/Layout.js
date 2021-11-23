import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import LinksBox from "./LinksBox";
import Notifications from "./Notifications";
import { useState } from "react";

const Layout = ({ children, switchLang, langPolish, translationsObj }) => {
  const router = useRouter();
  const location = router.pathname;
  const mainVariants = {
    initial: {
      opacity: 0,
      x: "-200px",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: "200px",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      <Head>
        <title>
          Adam Sokólski{" "}
          {location.substring(1) &&
            `| ${capitalizeFirstLetter(location.substring(1))}`}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Front-End Developer" />
      </Head>

      <Notifications translationsObj={translationsObj} />
      <LinksBox translationsObj={translationsObj} />
      <Header
        switchLang={switchLang}
        langPolish={langPolish}
        translationsObj={translationsObj}
      />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.pathname}
          variants={mainVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer translationsObj={translationsObj} />
    </>
  );
};

export default Layout;
