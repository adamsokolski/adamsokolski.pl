import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, GitHub, Mail } from "react-feather";
import styles from "../styles/LinksBox.module.css";

const LinksBox = () => {
  const startVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div
      className={styles.links}
      variants={startVariants}
      animate="animate"
      initial="initial"
    >
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/adam-sok%C3%B3lski-bb4370199/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin strokeWidth="1.5px" />
      </a>

      <a
        className={styles.link}
        href="https://github.com/idKrazu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub strokeWidth="1.5px" />
      </a>
    </motion.div>
  );
};

export default LinksBox;
