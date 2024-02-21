import { Link } from "react-scroll";
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
        <h2>
          Full Stack
          <br />
          Developer
        </h2>
        <Link
          className="scrollDownPrompt"
          activeClass="active"
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="promptArrow"></span>
          <span className="promptArrow"></span>
          <span className="promptArrow"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
