import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="contactSection">
      <div className="footerOne">
        <div className="emailWrapper">
          <h2>
            Let&#39;s
            <br />
            Connect.
          </h2>
          <p>eddiewachaga6@gmail.com</p>
        </div>
        <div className="formWrapper">
          <form>
            <label>
              Your name:
              <input type="text" />
            </label>
            <label>
              Your email address:
              <input type="email" />
            </label>
            <label>
              Your message:
              <input type="text" />
            </label>
            <button type="submit" className="sendBtn">
              Send
              <FiArrowRight />
            </button>
          </form>
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
    </footer>
  );
};

export default Footer;
