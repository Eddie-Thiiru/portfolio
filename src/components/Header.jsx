import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>ET</h2>
      <nav className="navigation">
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
