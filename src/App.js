import React from 'react';
import './App.css'; // Import CSS
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
       
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
