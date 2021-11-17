import { AnimatePresence, motion } from "framer-motion";
const Resume = () => {
  const mainVariants = {
    initial: {
      opacity: 0,
      x: "-200px",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: "200px",
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        key="resume"
        variants={mainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <p>Resume stuff</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Resume;
