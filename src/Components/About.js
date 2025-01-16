import React from 'react';
import './About.css';
import mephotos from '../Assets/mephotos.jpg';



const About = () => {
  
  
  return (
    <div className="about-container">
   
      {/* About Title Section */}
      <section className="about-section">
        <h1 className="about-title">About Me</h1>
        <div className="about-line"></div>
        <p className="about-text" >
        Dedicated Frontend Developer with 1 Year of experience in crafting visually appealing and user-friendly web
interfaces. Proficient in HTML, CSS, and JavaScript, I have a strong foundation in responsive design and
cross-browser compatibility. Passionate about creating intuitive user experiences, I am eager to contribute
to innovative web development projects.
        </p>
      </section>

      {/* About Information Section */}
      <section className="about-info-container">
        <div className="about-info-left">
          <img src={mephotos} alt="About" className="about-image" />
        </div>

        <div className="about-info-right">
          <h2 className="about-info-title">Frontend Web Developer</h2>
          <p className="about-info-text">
          This Information provides a comprehensive overview of my personal information, including details such as key personal highlights.
          </p>

          <div className="about-info-lists">
            {/* Primary Info List */}
            <ul className="about-info-list">
            <li className="about-info-list-item">
                <span className="about-info-list-item-label">Degree:</span> Master Of Computer Application
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Phone:</span> +91 8962746373
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">City:</span> Indore , Madhya Pradesh
              </li>
              {/* <li className="about-info-list-item">
                <span className="about-info-list-item-label">Birthday:</span> 05/10/2000
              </li> */}
             
            </ul>

            {/* Secondary Info List */}
            <ul className="about-info-list">
            
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">GITHUB:</span> https://github.com/Yoshita2105
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Gmail:</span> yoshita2105@gmail.com
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Linkedin:</span> http://LinkedIn.com/in/yoshita-jain-283687213
              </li>
             
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
