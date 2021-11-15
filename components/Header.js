import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a className="logo-link">
          <h1 className={styles.headerLogo}>as</h1>
        </a>
      </Link>
      <Link href="/">
        <a>
          <span>01.</span> Home
        </a>
      </Link>
      <Link href="/">
        <a>
          <span>02.</span> Resume
        </a>
      </Link>
      <Link href="/">
        <a>
          <span>03.</span> Projects
        </a>
      </Link>
      <Link href="/">
        <a>
          <span>04.</span> Contact
        </a>
      </Link>
    </header>
  );
};

export default Header;
