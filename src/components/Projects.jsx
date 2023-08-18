import "../styles/Projects.css";

const ProjectCard = ({
  title,
  description,
  site,
  github,
  imageURL,
  className,
}) => {
  return (
    <div className={className}>
      <header className="projectHeader">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <nav className="projectLinks">
          <a href={site}>Live Site</a>
          <a href={github}>Github</a>
        </nav>
      </header>
      <div className="projectImgWrapper">
        <img src={imageURL} alt="" />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projectsSection">
      <h2>-Projects</h2>
      <ProjectCard
        title="cvBuilder"
        description="Online CV builder app"
        site="https://eddie-thiiru-cvbuilder.netlify.app/"
        github=""
        imageURL=""
        className="project1"
      />
      <ProjectCard
        title="cvBuilder"
        description="Online CV builder app"
        site="https://eddie-thiiru-cvbuilder.netlify.app/"
        github=""
        imageURL=""
        className="project2"
      />
      <ProjectCard
        title="cvBuilder"
        description="Online CV builder app"
        site="https://eddie-thiiru-cvbuilder.netlify.app/"
        github=""
        imageURL=""
        className="project3"
      />
      <a href="">Explore more</a>
    </section>
  );
};

export default Projects;
