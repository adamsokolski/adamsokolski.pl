import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header>
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
      <Toggle />
    </header>
  );
};

export default Header;
