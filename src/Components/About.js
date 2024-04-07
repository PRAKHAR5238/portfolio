import React, { Component } from 'react';
import pdf from '../pdf/resume.pdf';

export class About extends Component {
  render() {
    return (
      <>
        <div className="container-home">
          
          <div className="right-home" data-aos="fade-up-right" data-aos-duration="1000">
            <div className="img"><img src="" alt="" /></div>
          </div>
          <div className="left-home" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="500">
            <h1 id='about'>
              Hi,
              I'm Prakhar Shukla,
              a Web developer.
            </h1>
            <a href={pdf} download='Resume.pdf' className="btn btn-outline-warning">
              Download Resume
            </a>
          </div>
        
          <div className="mid-home" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="1500">
            As a fresher student with a diverse skill set in web development, I bring
            proficiency in a range of programming languages and technologies
            essential for creating modern web applications. With expertise in React,
            JavaScript, HTML, CSS, Python, and Bootstrap, I am well-equipped to
            contribute effectively to front-end development projects.
            Additionally, my knowledge extends to leveraging artificial intelligence
            (AI) tools for productivity enhancements, allowing me to streamline
            processes and innovate within web development workflows.
          </div>
        
        </div>
      </>
    );
  }
}

export default About;
