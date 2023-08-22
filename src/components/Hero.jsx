import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="heroSection">
      <h1>
        Eddie
        <br />
        <span>Thiiru.</span>
      </h1>
      <div>
        <nav className="socialLinks heroSocialLinks">
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
        <h2>
          Full Stack
          <br />
          Developer
        </h2>
      </div>
    </section>
  );
};

export default Hero;
