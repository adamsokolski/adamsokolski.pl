import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const startVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.6,
      },
    },
  };
  return (
    <motion.footer variants={startVariants} animate="animate" initial="initial">
      <p>
        © 2021 Adam Sokólski -{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
      </p>
    </motion.footer>
  );
};

export default Footer;
