import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return(
    <section id="project" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        <ProjectCard
        title="Personal Portfolio"
        description="Responsive portfolio website built with React and CSS."
        link="#"
        />

        <ProjectCard
        title="Weather App"
        description="Weather application using React and OpenWeather API."
        link="#"
        />

        <ProjectCard
        title="Todo App"
        description="Task management application built with React."
        link="#"
        />

      </div>
    </section>
  );
}

export default Projects;