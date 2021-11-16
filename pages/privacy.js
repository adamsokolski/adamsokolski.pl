import Link from "next/link";

const Privacy = () => {
  return (
    <>
      <h2>Cookies</h2>
      <p>
        This internet website uses its own technical cookies in order to help
        users navigate the site as efficiently and easily as possible.{" "}
      </p>
      <p>
        The website uses Google Analytics cookies to count the number of site
        visits. For information about the cookies used to visit the appropriate
        page of Google (
        <Link href="https://www.google.com/policies/technologies/types/">
          <a>HERE</a>
        </Link>
        ){" "}
      </p>
      <p>
        These are cookies that enable the navigation and provide a service
        required by the user. They are not used for any ulterior purpose and are
        normally installed directly by the owner of the web site. They are
        divided into navigation or session cookies, technical cookies,
        functional cookies (language, products selected for shopping){" "}
      </p>
      <p>
        Analytical cookies are used to collect anonymous statistics information
        about the use of the site by users (e.g. number of visitors, links of
        provenance, key words used to find the site on search engines). They can
        be sent by the same site (in which case they are combined with technical
        cookies) or by other sites (third party) that make available functions
        developed by them. As for example in the case of Google Analytics
        cookies.
      </p>
      <p>
        You may consent or not to the installation of cookies even with the use
        of your computer’s functionality. However, not all the functionality of
        this site might remain operative should one or more cookies be disabled
        (some cookies are indispensible for the basic functionality of the
        site).{" "}
      </p>
    </>
  );
};

export default Privacy;
