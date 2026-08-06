import "./Projects.css";

function Projects() {
  return(
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>
            Responsive portfolio website built with React and CSS.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>
            Weather application using React and OpenWeather API.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>Todo App</h3>
          <p>
            Task management application built with React.
          </p>
          <button>View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;