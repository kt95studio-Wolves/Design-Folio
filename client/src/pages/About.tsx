import Contact from '@/components/portfolio/Contact';
import Hero from '@/components/portfolio/Hero';
import Navbar from '@/components/portfolio/Navbar';
import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <main>
        <Hero />
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p>
            I am a passionate software developer with a love for creating innovative and user-friendly applications.
            With years of experience in the field, I have honed my skills in various programming languages and technologies,
            including React, Node.js, and TypeScript.
          </p>
          <p>
            My journey in software development began with a fascination for problem-solving and a desire to build things that make a difference.
            I am constantly learning and exploring new technologies to stay at the forefront of the industry.
          </p>
          <p>
            In my spare time, I enjoy contributing to open-source projects, attending tech conferences, and exploring new frameworks.
            I am always open to new challenges and opportunities to collaborate with other talented developers.
          </p>
          <p>
            Feel free to reach out to me if you have any questions or would like to connect!
          </p>
        </div>
      </div>
      </main>
      <Contact />
    </div>
  );
};

export default About;