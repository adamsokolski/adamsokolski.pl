import projects from "../../data/projects";
import { ExternalLink, GitHub } from "react-feather";

const Projects = () => {
  const techStack = (arr) => {
    arr.map((tech) => {
      <div key={tech}>{tech}</div>;
    });
  };

  const projectsBox = projects.map((project) => (
    <div className="project" key={project.id}>
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
        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
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
  ));
  return (
    <div className="projects">
      <h2>My Projects.</h2>
      {projectsBox}
    </div>
  );
};

export default Projects;
