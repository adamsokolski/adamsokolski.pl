import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>
        © 2021 Adam Sokólski -{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
      </p>
    </footer>
  );
};

export default Footer;
