import React from "react";

const avatar = require('../img/team/scott.jpg');

const About = () => {
  return (
    <section className="bg-faded" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">About Me</h2>
            <h3 className="section-subheading text-muted">This is why I'm Scott.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src={avatar} alt="Scott Cook"/>
              <h4>Scott M Cook</h4>
              <p className="text-muted">Front End Web Developer</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p className="large text-muted"> 
              When I was a much younger man, I realized I enjoyed building things when my LEGO collection had outgrown (and continues to grow) all the shelf space in my room. From there, I moved on to taking apart small electronics until my mid 20's I realized programs, like LEGOS, are built together piece by piece! In addition to my passion for technology, I enjoy running, and entertaining my Australian Cattle Dog.
              </p>
          </div>
        </div>
      </div>
	  </section>
  );
};

export default About;
