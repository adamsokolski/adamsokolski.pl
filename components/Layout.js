import Footer from "./Footer";
import Header from "./Header";
import LinksBox from "./LinksBox";
import Notifications from "./Notifications";

const Layout = ({ children }) => {
  return (
    <>
      <Notifications />
      <LinksBox />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
