import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "react-feather";
import notifications from "../data/notifications";
import styles from "../styles/Notifications.module.css";

const Notifications = ({ translationsObj }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [notificationNumber, setNotificationNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (notificationNumber < notifications.length - 1) {
      setNotificationNumber(notificationNumber + 1);
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  };

  const notificationVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 10,
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
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 1,
        delay: 0,
        type: "spring",
      },
    },
  };
  return (
    <motion.div className={styles.mainBox}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.notification}
            variants={notificationVariants}
            animate="visible"
            initial="hidden"
            whileTap="tap"
            whileDrag="whileDrag"
            exit="exit"
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            drag
          >
            <Link href="/projects">
              <a
                onClick={() => {
                  handleClose();
                }}
              >
                {translationsObj.firstNotification}
              </a>
            </Link>

            <button
              className={styles.close}
              onClick={() => {
                handleClose();
              }}
            >
              <X />
              <span className="visually-hidden">
                {translationsObj.closeNotification}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Notifications;
