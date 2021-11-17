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
      <Link href="https://www.linkedin.com/in/adam-sok%C3%B3lski-bb4370199/">
        <a className={styles.link}>
          <Linkedin strokeWidth="1.5px" />
        </a>
      </Link>
      <Link href="https://github.com/idKrazu">
        <a className={styles.link}>
          <GitHub strokeWidth="1.5px" />
        </a>
      </Link>
      <Link href="">
        <a className={styles.link}>
          <Mail strokeWidth="1.5px" />
        </a>
      </Link>
    </motion.div>
  );
};

export default LinksBox;
