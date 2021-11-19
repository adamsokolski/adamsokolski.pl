import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home({ translationsObj }) {
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
      <h2 className={styles.name}>Adam Sokólski</h2>
      <h3 className={styles.prof}>Front-End Developer</h3>
      <div className="mainButton">
        <Link href="/about">
          <a>{translationsObj.aboutButton}</a>
        </Link>
      </div>
    </>
  );
}
