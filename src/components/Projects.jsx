import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import odinBookImg from "../images/odin-book-screenshot.png";
import vaultImg from "../images/game-store-screenshot.png";
import cvImg from "../images/cvBuilder-screenshot.png";
import photoTagImg from "../images/photo-tag-screenshot.png";
import membersClubImg from "../images/members-only-screenshot.png";
import "../styles/Projects.css";

const ProjectCard = ({
  title,
  description,
  liveSite,
  github,
  imageURL,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${className} project`}
    >
      <header className="projectHeader">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <nav className="projectLinks">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href={liveSite}
            title="Live Site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiArrowUpRight />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href={github}
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </motion.a>
        </nav>
      </header>
      <div className="projectImgWrapper">
        <img src={imageURL} alt="" className="projectScreenshot1" />
        <img src={imageURL} alt="" className="projectScreenshot2" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projectsSection">
      <h2>Projects</h2>
      <ProjectCard
        title="Odinbook"
        description="A Facebook clone"
        liveSite="https://odin-app.netlify.app/login"
        github="https://github.com/Eddie-Thiiru/odin-book"
        imageURL={odinBookImg}
        className="project1"
      />
      <ProjectCard
        title="Game Vault"
        description="Video game store"
        liveSite="https://game-vault-shopping-cart.netlify.app"
        github="https://github.com/Eddie-Thiiru/shopping-cart"
        imageURL={vaultImg}
        className="project2"
      />
      <ProjectCard
        title="cvBuilder"
        description="Online CV builder app"
        liveSite="https://eddie-thiiru-cvbuilder.netlify.app/"
        github="https://github.com/Eddie-Thiiru/cv-application"
        imageURL={cvImg}
        className="project3"
      />
      <ProjectCard
        title="photoTag"
        description="A Photo Tagging app"
        liveSite="https://photo-tag-find.netlify.app"
        github="https://github.com/Eddie-Thiiru/where-is-waldo"
        imageURL={photoTagImg}
        className="project4"
      />
      <ProjectCard
        title="Only Members"
        description="A message board website"
        liveSite="https://only-members-club.fly.dev/"
        github="https://github.com/Eddie-Thiiru/members-only"
        imageURL={membersClubImg}
        className="project5"
      />
      <a
        href="https://github.com/Eddie-Thiiru?tab=repositories"
        className="exploreMoreLink"
      >
        Explore more <FiArrowRight />
      </a>
    </section>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  liveSite: PropTypes.string,
  github: PropTypes.string,
  imageURL: PropTypes.string,
  className: PropTypes.string,
};

export default Projects;
