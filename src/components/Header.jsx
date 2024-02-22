import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import "../styles/Header.css";

const linkVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-100%" },
};

const Nav = ({ animate }) => {
  return (
    <nav className="headerNav">
      {animate === true ? (
        <>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={linkVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
          >
            <Link
              activeClass="active"
              to="aboutSection"
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={linkVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
          >
            <Link
              activeClass="active"
              to="projectsSection"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={linkVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.45, ease: "easeOut" }}
          >
            <Link
              activeClass="active"
              to="contactSection"
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </motion.div>
        </>
      ) : (
        <>
          <Link
            activeClass="active"
            to="aboutSection"
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projectsSection"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contactSection"
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </>
      )}
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
        <Nav animate={true} />
      </div>
      <div className={`hamburgerMenu ${showMenu === true ? "menuActive" : ""}`}>
        <button
          type="button"
          className={` ${showMenu === true ? "closeMenuBtn" : "menuBtn"}`}
          onClick={handleMenuToggle}
        >
          {showMenu === true ? <RxCross2 /> : <FiMenu />}
        </button>

        {showMenu === true && <Nav animate={false} />}
      </div>
    </header>
  );
};

Nav.propTypes = {
  animate: PropTypes.bool,
};

export default Header;
