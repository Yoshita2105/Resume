import React from 'react';
import './About.css';
import myimage from '../Assets/myimage.jpg';



const About = () => {
  
  
  return (
    <div className="about-container">
   
      {/* About Title Section */}
      <section className="about-section">
        <h1 className="about-title">About Me</h1>
        <div className="about-line"></div>
        <p className="about-text" >
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.
        </p>
      </section>

      {/* About Information Section */}
      <section className="about-info-container">
        <div className="about-info-left">
          <img src={myimage} alt="About" className="about-image" />
        </div>

        <div className="about-info-right">
          <h2 className="about-info-title">UI/UX Designer & Web Developer</h2>
          <p className="about-info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div className="about-info-lists">
            {/* Primary Info List */}
            <ul className="about-info-list">
            <li className="about-info-list-item">
                <span className="about-info-list-item-label">Degree:</span> Master Of Computer Application
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Birthday:</span> 1 May 1995
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Linkedin:</span> www.example.com
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Gmail:</span> www.example.com
              </li>
            </ul>

            {/* Secondary Info List */}
            <ul className="about-info-list">
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Phone:</span> +123 456 7890
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">City:</span> New York, USA
              </li>
              <li className="about-info-list-item">
                <span className="about-info-list-item-label">Age:</span> 30
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
