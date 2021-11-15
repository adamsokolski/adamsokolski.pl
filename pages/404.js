import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";

const NotFound = () => {
  const router = useRouter();
  const [redirectTimer, setRedirectTimer] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRedirectTimer(redirectTimer - 1);
    }, 1000);
  }, [redirectTimer]);
  return (
    <div>
      <h1>
        Page not found...{" "}
        <motion.span
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          😕
        </motion.span>
      </h1>
      <p>
        You'll be redirected to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        in {redirectTimer} seconds.
      </p>
    </div>
  );
};

export default NotFound;
