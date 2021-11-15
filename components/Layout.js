import Footer from "./Footer";
import Header from "./Header";
import LinksBox from "./LinksBox";

const Layout = ({ children }) => {
  return (
    <>
      <LinksBox />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
