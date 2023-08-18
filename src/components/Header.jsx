import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="mainHeader">
      <h2>ET</h2>
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
    </header>
  );
};

export default Header;
