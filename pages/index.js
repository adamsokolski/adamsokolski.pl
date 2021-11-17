import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  const titleVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <>
      <h1 className={styles.name}>Adam Sokólski</h1>
      <h2 className={styles.prof}>Front-End Developer</h2>
      <button className={styles.about}>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </button>
    </>
  );
}
