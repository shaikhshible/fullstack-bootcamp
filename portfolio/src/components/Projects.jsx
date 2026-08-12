import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects =[
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Responsive React portfolio showcasing my skills and projects.",
    },

    {
      id: 2,
      title: "Weather App",
      description: "Weather application using React and OpenWeather API.",
    },

    {
      id: 3,
      title: "Todo App",
      description: "Task management application built with React.",
    },

    {
      id: 4,
      title: "E-Commerce App",
      description: "A React-based product listing and shopping  cart application.",
    },

    {
      id: 5,
      title: "Blog App",
      description: "A React blog application with posts and categories.",
    },

  ];

  return(
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}

      </div>
    </section>
  );
}

export default Projects;