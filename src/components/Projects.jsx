import PropTypes from "prop-types";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
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
          <a href={site}>
            Live Site <FiArrowUpRight />
          </a>
          <a href={github}>
            Github <FiArrowUpRight />
          </a>
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
      <a href="">
        Explore more <FiArrowRight />
      </a>
    </section>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  site: PropTypes.string,
  github: PropTypes.string,
  imageURL: PropTypes.string,
  className: PropTypes.string,
};

export default Projects;
