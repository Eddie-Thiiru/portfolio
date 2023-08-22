import PropTypes from "prop-types";
import { BsGithub } from "react-icons/bs";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import vaultImg from "../images/game-store-screenshot.png";
import cvImg from "../images/cvBuilder-screenshot.png";
import todoImg from "../images/todo-list-screenshot.png";
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
    <div className={`${className} project`}>
      <header className="projectHeader">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <nav className="projectLinks">
          <a href={github} title="Live Site">
            <FiArrowUpRight />
          </a>
          <a href={site} title="Github">
            <BsGithub />
          </a>
        </nav>
      </header>
      <div className="projectImgWrapper">
        <img src={imageURL} alt="" className="projectScreenshot1" />
        <img src={imageURL} alt="" className="projectScreenshot2" />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projectsSection">
      <h2>Projects</h2>
      <ProjectCard
        title="Game Vault"
        description="Video game store"
        site=""
        github=""
        imageURL={vaultImg}
        className="project1"
      />
      <ProjectCard
        title="cvBuilder"
        description="Online CV builder app"
        site="https://eddie-thiiru-cvbuilder.netlify.app/"
        github=""
        imageURL={cvImg}
        className="project2"
      />
      <ProjectCard
        title="ToDo Tasks"
        description="To-do list app"
        site=""
        github=""
        imageURL={todoImg}
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
