import { useState } from "react";
import { Menu, X } from "react-feather";
import Navbar from "./Navbar";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="hamburger" onClick={() => handleClick()}>
      {isOpen && <X />}
      {!isOpen && (
        <>
          <div className="navbar-mobile">
            <Navbar />
          </div>
        </>
      )}
    </nav>
  );
};

export default Hamburger;
