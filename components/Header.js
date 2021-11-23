import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { Menu, X } from "react-feather";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

const Header = ({ langPolish, switchLang, translationsObj }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

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

  const hamburgerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.header variants={startVariants} animate="animate" initial="initial">
      <Logo />

      <nav className="hamburger">
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <>
              <motion.div
                className="navbar-mobile"
                variants={hamburgerVariants}
                animate="animate"
                initial="initial"
                exit="exit"
              >
                <X size="30" onClick={() => handleClick()} />
                <Navbar
                  onClick={() => handleClick()}
                  translationsObj={translationsObj}
                  langPolish={langPolish}
                  switchLang={switchLang}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {!isOpen && (
          <>
            <Menu onClick={() => handleClick()} />
          </>
        )}
      </nav>
      <nav className="navbar">
        <Navbar
          translationsObj={translationsObj}
          langPolish={langPolish}
          switchLang={switchLang}
        />
      </nav>
    </motion.header>
  );
};

export default Header;
