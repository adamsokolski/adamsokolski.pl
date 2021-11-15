import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Logo = () => {
  const logoVariants = {
    visible: {
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 250, damping: 15 },
    },
    hidden: {
      rotate: 180,
      scale: 0,
    },
  };
  return (
    <motion.div
      className="logo"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <Link href="/">
        <a className="logo-link">
          <h1 className={styles.headerLogo}>as</h1>
        </a>
      </Link>{" "}
    </motion.div>
  );
};

export default Logo;
