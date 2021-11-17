import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
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
          <span>01.</span> About
        </a>
      </Link>
      <Link href="/resume">
        <a>
          <span>02.</span> Resume
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <span>03.</span> Projects
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <span>04.</span> Contact
        </a>
      </Link>
    </motion.header>
  );
};

export default Header;
