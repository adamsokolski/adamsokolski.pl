import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Sokólski</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={styles.name}>Adam Sokólski</h1>
      <h2 className={styles.prof}>Front-End Developer</h2>
      <button>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </button>
    </>
  );
}
