import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import "../styles/Footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="contactSection">
      <div className="footerOne">
        <div className="emailWrapper">
          <h2>Let&rsquo;s connect.</h2>
          <p>eddiewachaga6@gmail.com</p>
        </div>
      </div>
      <div className="footerTwo">
        <nav className="socialLinks">
          <a href="https://github.com/Eddie-Thiiru" title="Github">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/eddie-wachaga-853525a8"
            title="LinkedIn"
          >
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
        <p>{getCurrentYear()} - Eddie Thiiru</p>
      </div>
    </footer>
  );
};

export default Footer;
