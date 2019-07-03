import React from "react"




const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Skills</h2>
            <h3 className="section-subheading text-muted">
              Always a work in progress.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary" />
              <i className="fa fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Languages</h4>
            <ul className="list-group text-muted">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Sass</li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary" />
              <i className="fa fa-wrench fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Tools &amp; Frameworks</h4>
            <ul className="list-group text-muted">
              <li>npm</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>VS Code</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary" />
              <i className="fa fa-star fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Accomplishments</h4>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/wGUyQbRnG8A"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;