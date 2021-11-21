import projects from "../../data/projects";
import { ExternalLink, GitHub } from "react-feather";
import Image from "next/image";

const Projects = ({ translationsObj }) => {
  const techStack = (arr) => {
    arr.map((tech) => {
      <div key={tech}>{tech}</div>;
    });
  };

  const projectsBox = projects.map((project) => (
    <div
      className={`project-box` + (project.id % 2 == 0 ? ` even` : ` odd`)}
      key={project.id}
    >
      <div className={`project-content`}>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          <a
            className="project-github-link"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <GitHub strokeWidth="1.5px" />
          </a>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <ExternalLink strokeWidth="1.5px" />
          </a>
        </div>
        <p className="project-date">
          {translationsObj.lang == "pl" ? project.datePl : project.dateEn}
        </p>
        <p>{translationsObj.lang == "pl" ? project.bodyPl : project.bodyEn}</p>
        <div className="tech-box">
          {project.stack.map((tech) => (
            <div className="tech-icon" key={`${project.id} + ${tech.alt}`}>
              <Image
                src={tech.src}
                alt={tech.title + " web technology logo"}
                width={40}
                height={40}
              />
              <span>{tech.title}</span>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={project.image.src}
        alt="Picture of my first project"
        width={600}
        height={337}
      />
    </div>
  ));
  projectsBox.reverse();
  return (
    <div>
      <h2>{translationsObj.projectsTitle}</h2>
      <div className="projects">{projectsBox}</div>
    </div>
  );
};

export default Projects;
