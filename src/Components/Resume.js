import React from 'react';
import './Resume.css'; // Import the CSS file

function Resume() {
  return (
    <div className="resume">
      <div className="header">
        <h1>Resume</h1>
        <div className="Resume-line"></div>

        <p>Magnam dolores commodi suscipit. Necessitatibus eiusconsequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
      <div className='full'>
      <div className="experience">
     
      <div className="education">
        <h2>EDUCATION</h2>
        <div className="degree">
          <h3>MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
          <p>2015 - 2016</p>
          <p>Rochester Institute of Technology, Rochester, NY</p>
          <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
        </div>

        <div className="degree">
          <h3>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h3>
          <p>2010 - 2014</p>
          <p>Rochester Institute of Technology, Rochester, NY</p>
          <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.</p>
        </div>
      </div>
      </div>

      <div className="professional-experience">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <div className="experience">
          <h3>SENIOR GRAPHIC DESIGN SPECIALIST</h3>
          <p>2019 - Present</p>
          <p>Experion, New York, NY</p>
          <ul>
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials.</li>
            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.</li>
            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.</li>
          </ul>
        </div>

        
      </div>

      </div>
    </div>
  );
}

export default Resume;