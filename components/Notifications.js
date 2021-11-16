import { motion } from "framer-motion";
import { X } from "react-feather";
import notifications from "../data/notifications";
import styles from "../styles/Notifications.module.css";

const Notifications = () => {
  const notificationVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 2,
        type: "spring",
      },
    },
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    hover: {
      scale: 1.05,
      transition: { duration: 1 },
    },
    tap: {
      scale: 0.95,
    },
    whileDrag: { scale: 0.95 },
  };
  return (
    <motion.div className={styles.mainBox}>
      <motion.div
        className={styles.notification}
        variants={notificationVariants}
        animate="visible"
        initial="hidden"
        whileTap="tap"
        whileDrag="whileDrag"
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        drag
      >
        {notifications[0].text} <X />
      </motion.div>
      <motion.div
        className={styles.notification}
        variants={notificationVariants}
        animate="visible"
        initial="hidden"
        whileTap="tap"
        whileDrag="whileDrag"
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        transition={{ delay: 5 }}
        drag
      >
        {notifications[1].text} <X />
      </motion.div>
    </motion.div>
  );
};

export default Notifications;
