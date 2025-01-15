import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce App',
      description: 'A platform with cart, payment, and product features.',
      link: '#',
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects and skills.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
