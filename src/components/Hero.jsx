import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "../styles/Hero.css";

const headingOneVariant = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: "-5%" },
};

const headingTwoVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "100%" },
};

const socialLinksVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const scrollPromptVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Hero = () => {
  return (
    <section className="heroSection">
      <motion.h1
        variants={headingOneVariant}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: "true" }}
        transition={{ duration: 2, delay: 0.3, type: "spring", bounce: 0.65 }}
      >
        Eddie
        <br />
        <span>Thiiru.</span>
      </motion.h1>
      <div>
        <nav className="socialLinks heroSocialLinks">
          <motion.a
            initial="hidden"
            whileInView={"visible"}
            variants={socialLinksVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
            href="https://github.com/Eddie-Thiiru"
            title="Github"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            initial="hidden"
            whileInView={"visible"}
            variants={socialLinksVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
            href="https://www.linkedin.com/in/eddie-wachaga-853525a8"
            title="LinkedIn"
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            initial="hidden"
            whileInView={"visible"}
            variants={socialLinksVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.45, ease: "easeOut" }}
            href="#"
            title="Twitter"
          >
            <BsTwitter />
          </motion.a>
        </nav>
        <motion.h2
          initial="hidden"
          variants={headingTwoVariant}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          Full Stack
          <br />
          Developer
        </motion.h2>
        <motion.div
          initial="hidden"
          variants={scrollPromptVariant}
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
