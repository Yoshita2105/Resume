import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Bridge Connect Solution',
      description: 'Bridge Connect Solution is a platform that connects companies with job seekers. It serves as a consulting website that helps companies find suitable candidates, both freshers and experienced professionals.',
      link: '#',
    },
    {
      name: 'Personal Project - Travel Website',
      description: 'Designed and implemented dynamic user interfaces using React.js to ensure smooth navigation and an intuitive user experience....increase the content ',
      link: 'https://travelscom.vercel.app',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects ">
          {projects.map((project, index) => (
            <div key={index} className="project-card mb-4">
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
