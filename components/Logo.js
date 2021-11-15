import Link from "next/link";
import styles from "../styles/Header.module.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a className="logo-link">
          <h1 className={styles.headerLogo}>as</h1>
        </a>
      </Link>{" "}
    </div>
  );
};

export default Logo;
