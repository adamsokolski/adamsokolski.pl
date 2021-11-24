import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      <h1>Page not found... 😕</h1>
      <p>
        You&apos;ll be redirected to the{" "}
        <Link href="/">
          <a className="fancy-link">Homepage</a>
        </Link>{" "}
        in {redirectTimer} seconds.
      </p>
    </div>
  );
};

export default NotFound;
