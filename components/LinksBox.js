import Link from "next/link";
import { Linkedin, GitHub, Mail } from "react-feather";
import styles from "../styles/LinksBox.module.css";

const LinksBox = () => {
  return (
    <div className={styles.links}>
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
    </div>
  );
};

export default LinksBox;
