import { motion } from "framer-motion";
import Image from "next/image";

const Flag = ({ switchLang, flag, langPolish }) => {
  const flagVariants = {
    initial: {
      opacity: 0,
      y: "5px",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: "-5px",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      key={flag}
      className="flag"
      variants={flagVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={() => switchLang()}
    >
      <Image
        src={langPolish ? "/pl.png" : "/en3.png"}
        alt="Picture of my first project"
        width={25}
        height={25}
      />
    </motion.div>
  );
};

export default Flag;
