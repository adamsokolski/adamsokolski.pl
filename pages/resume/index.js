// import { ExternalLink } from "react-feather";
import Link from "next/link";

const Resume = ({ translationsObj }) => {
  return (
    <div>
      {/* <h2>{translationsObj.resumeTitle}</h2> */}
      <p>nothing here...</p>
      <p>
        👉
        <Link href="/">
          <a className="fancy-link">Homepage</a>
        </Link>
      </p>
      <a href="" target="_blank" rel="noopener noreferrer">
        {/* <ExternalLink /> */}
      </a>
    </div>
  );
};

export default Resume;
