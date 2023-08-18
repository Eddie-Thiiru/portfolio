import "../styles/About.css";

const Grid = () => {
  return (
    <div className="technologiesGrid">
      <div>
        <img src="" alt="" />
        <p>HTML</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>React</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Vitest</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>CSS</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Express.js</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Git</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>javaScript</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>Node.js</p>
      </div>
      <div>
        <img src="" alt="" />
        <p>npm</p>
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
