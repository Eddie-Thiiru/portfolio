import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import "../styles/Header.css";

const Nav = () => {
  return (
    <nav className="headerNav">
      <Link
        activeClass="active"
        to="aboutSection"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="projectsSection"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="contactSection"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </Link>
    </nav>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Remove menu state when menu is deactivated by css @media styling
  useEffect(() => {
    window.addEventListener("resize", resetMenuState);

    return () => {
      window.removeEventListener("resize", resetMenuState);
    };
  });

  const resetMenuState = () => {
    if (document.body.clientWidth > 700) {
      setShowMenu(false);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="mainHeader">
      <div className="siteLogo">
        <Link
          activeClass="active"
          to="heroSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          E
        </Link>
      </div>
      <div className="navContainer">
        <Nav />
      </div>
      <div className={`hamburgerMenu ${showMenu === true ? "menuActive" : ""}`}>
        <button
          type="button"
          className={` ${showMenu === true ? "closeMenuBtn" : "menuBtn"}`}
          onClick={handleMenuToggle}
        >
          {showMenu === true ? <RxCross2 /> : <FiMenu />}
        </button>

        {showMenu === true && <Nav />}
      </div>
    </header>
  );
};

export default Header;
