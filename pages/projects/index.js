import projects from "../../data/projects";
import { ExternalLink, GitHub } from "react-feather";
import Image from "next/image";

const Projects = () => {
  const techStack = (arr) => {
    arr.map((tech) => {
      <div key={tech}>{tech}</div>;
    });
  };

  const projectsBox = projects.map((project) => (
    <div className="project-box" key={project.id}>
      <div
        className={`project-content` + (project.id % 2 == 0 ? ` even` : ` odd`)}
      >
        <h3>{project.title}</h3>
        <p>{project.date}</p>
        <div className="project-links">
          <a
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
        <p>{project.body}</p>
        <div>
          {project.stack.map((tech) => (
            <div className="technology" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={project.image.src}
        alt="Picture of the author"
        width={600}
        height={337}
      />
    </div>
  ));
  return (
    <div className="projects">
      <h2>My Projects.</h2>
      {projectsBox}
    </div>
  );
};

export default Projects;
