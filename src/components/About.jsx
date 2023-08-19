import htmlLogo from "../images/html.svg";
import cssLogo from "../images/css.svg";
import jsLogo from "../images/js.svg";
import reactLogo from "../images/react.svg";
import viteLogo from "../images/vite.svg";
import expressLogo from "../images/express.svg";
import nodeLogo from "../images/node-js.svg";
import vitestLogo from "../images/vitest.svg";
import jestLogo from "../images/jest.svg";
import gitLogo from "../images/git.svg";
import webpackLogo from "../images/webpack.svg";
import npmLogo from "../images/npm.svg";
import "../styles/About.css";

const Grid = () => {
  return (
    <div className="technologiesGrid">
      <div className="technologiesWrapper">
        <div>
          <img src={htmlLogo} alt="" />
          <p>HTML</p>
        </div>
        <div>
          <img src={cssLogo} alt="" />
          <p>CSS</p>
        </div>
        <div>
          <img src={jsLogo} alt="" />
          <p>javaScript</p>
        </div>
      </div>
      <div className="technologiesWrapper">
        <div>
          <img src={viteLogo} alt="" />
          <p>Vite</p>
        </div>
        <div>
          <img src={reactLogo} alt="" />
          <p>React</p>
        </div>
        <div>
          <img src={expressLogo} alt="" />
          <p>Express.js</p>
        </div>
      </div>
      <div className="technologiesWrapper">
        <div>
          <img src={nodeLogo} alt="" />
          <p>Node.js</p>
        </div>
        <div>
          <img src={vitestLogo} alt="" />
          <p>Vitest</p>
        </div>
        <div>
          <img src={jestLogo} alt="" />
          <p>Jest</p>
        </div>
      </div>
      <div className="technologiesWrapper">
        <div>
          <img src={gitLogo} alt="" />
          <p>Git</p>
        </div>
        <div>
          <img src={webpackLogo} alt="" />
          <p>Webpack</p>
        </div>
        <div>
          <img src={npmLogo} alt="" />
          <p>npm</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="aboutSection">
      <h2>-About</h2>
      <p>
        Hello, I am Eddie, a passionate full stack web developer who loves
        solving problems and delivering high quality products.
      </p>
      <Grid />
    </section>
  );
};

export default About;
