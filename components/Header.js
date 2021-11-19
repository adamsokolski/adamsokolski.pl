import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";

import Flag from "./Flag";

const Header = ({ langPolish, switchLang, translationsObj }) => {
  const startVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        transition: { when: "beforeChildren" },
      },
    },
  };
  return (
    <motion.header
      variants={startVariants}
      animate="animate"
      initial="initial"
      exitBeforeEnter
    >
      <Logo />

      <Link href="/about">
        <a>
          <span>01.</span> {translationsObj.aboutLink}
        </a>
      </Link>
      <Link href="/resume">
        <a>
          <span>02.</span> {translationsObj.resumeLink}
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <span>03.</span> {translationsObj.projectsLink}
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <span>04.</span> {translationsObj.contactLink}
        </a>
      </Link>
      <AnimatePresence exitBeforeEnter>
        {langPolish ? (
          <Flag
            flag="pl"
            key="pl"
            switchLang={switchLang}
            langPolish={langPolish}
          />
        ) : (
          <Flag
            flag="en"
            key="en"
            switchLang={switchLang}
            langPolish={langPolish}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
