import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="contactSection">
      <div className="footerOne">
        <div className="emailWrapper">
          <h2>Want To Get In Touch?</h2>
          <p>eddiewachaga6@gmail.com</p>
        </div>
      </div>
      <div className="footerTwo">
        <nav className="socialLinks">
          <a href="https://github.com/Eddie-Thiiru" title="Github">
            <BsGithub />
          </a>
          <a href="#" title="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="#" title="Twitter">
            <BsTwitter />
          </a>
        </nav>
      </div>
      <div className="copyrightContainer">
        <span>
          <BiCopyright />
        </span>
        <p>2023 - Eddie Thiiru</p>
      </div>
    </footer>
  );
};

export default Footer;
