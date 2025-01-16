
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';
import { bounceInRight } from 'react-animations';
import './Resume.css'; // Import the CSS file

function Resume() {

  const [isVisible, setIsVisible] = useState(false);

  const bounceInLeftAnimation = keyframes`${bounceInLeft}`;

  const AnimatedDiv = styled.div`
    animation: 5s ${bounceInLeftAnimation};
    font-size: 24px;
  `;

const bounceInRightAnimation = keyframes`${bounceInRight}`;

const AnimatedDiv2 = styled.div`
  animation: 5s ${bounceInRightAnimation};
  font-size: 24px;
`;


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

    const section = document.getElementById('resume');
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
    <div className="resume">
      <div className="header" style={{ marginTop: '70px' }}>
        <h1 >Resume</h1>
        <div className="Resume-line"></div>

        <p>This  information provides a concise overview of my professional journey, emphasizing key experiences, education, and skills developed along the way. It reflects my continuous growth and the path I have taken to advance in my career.</p>
      </div>
      <div className='full'>
      <div className="experience">
     
      <div className="education">
        <h2>EDUCATION</h2>

       <AnimatedDiv>
        <div className="degree">
          <h3>MASTER OF COMPUTER APPLICATION</h3>
          <p> Aug 2022 -  July 2024</p>
          <p>Shri Vaishnav Vidyapeeth Vishwavidyalaya Indore, Madhya Pradesh</p>
          <p>7.5cgp</p>
        </div>
        </AnimatedDiv>
        <AnimatedDiv2>
        <div className="degree">
          <h3>BACHELOR OF SCIENCE IN COMPUTERSCIENCE</h3>
          <p> JULY 2019 - JUNE 2022</p>
          <p>Shri Jayatilal Hirachand Sanghvi Gujarati Innovative College of Commerce & Science Indore, Madhya Pradesh</p>
          <p>6.6cgp</p>
        </div>
        </AnimatedDiv2>
      </div>
      </div>

      <div className="professional-experience">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="experience">
          <h3>FRONTEND DEVELOPER</h3>
          <p> JAN 2024 - Dec 2024</p>
          <p>DigiChum Infotech LLP Indore, Madhya pradesh</p>
          <p>DigiChum Infotech LLP is an IT solutions company that specializes in web development, application development, and graphic design
          services..</p>
          <ul>
            <li>Designed and developed user-friendly web interfaces using
            [Frontend technologies, React, Javascript].</li>
            <li>Implemented responsive design principles for optimal user
            experience. </li>
            <li>Working closely with UI/UX designers to translate design
            mockups into functional code</li>
          </ul>
        </div>

        
      </div>

      </div>
    </div>
  );
}

export default Resume;