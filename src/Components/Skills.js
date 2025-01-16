
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';
import './Skills.css';

 import { Link } from 'react-router-dom';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGitAlt, FaBootstrap } from 'react-icons/fa'; // Importing icons

function Skills() {

  const [isVisible, setIsVisible] = useState(false);

  const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

  const AnimatedDiv = styled.div`
    animation: 2s ${bounceInLeftAnimation};
    font-size: 24px;
  `;
  const projects = [
    {
      
      icon: <FaHtml5 size={40} style={{ color: '#E34F26' }} />,
      name: 'HTML',
      description: 'Strong understanding of HTML5 semantics, including structure, forms, and accessibility.',
    },
    {
      icon: <FaCss3Alt size={40} style={{ color: '#1572B6' }} />,
      name: 'CSS',
      description: 'Proficient in CSS3, including flexbox, grid layout, animations, and responsive design principles.',
    },
    {
      icon: <FaJs size={40} style={{ color: '#F7DF1E' }} />,
      name: 'JavaScript',
      description: 'Basic JavaScript knowledge with a strong foundation for learning more advanced concepts.',
    },
    {
      icon: <FaReact size={40} style={{ color: '#61DAFB' }} />,
      name: 'React JS',
      description: 'Familiarity with React fundamentals, including components, props, state, and JSX.',
    },
    {
      icon: <FaBootstrap size={40} style={{ color: '#7952B3' }} />,
      name: 'Bootstrap',
      description: 'Experience with Bootstrap framework for rapid prototyping and responsive UI development.',
    },
    {
      icon: <FaGitAlt size={40} style={{ color: '#F05032' }} />,
      name: 'GitHub',
      description: 'Basic understanding of Git for version control, branching, and collaboration.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div id="skills" className="skills-section">
      <section className="bg-white-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-left">Skills</h2>
         
          <AnimatedDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-3" >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg w-90 h-60 rounded-lg p-2 hover:shadow-xl transition-shadow"
              >
                <div className="icon-container mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4 text-xl">{project.description}</p>
              </div>
              
             
            ))}
          </div>
          </AnimatedDiv>
         
        </div>
      </section>
    </div>
  );
}

export default Skills;
