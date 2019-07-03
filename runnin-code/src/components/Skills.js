import React from "react"

const Skills = () => {
  return (
    <section id="skills">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Skills</h2>
            <h3 class="section-subheading text-muted">
              Always a work in progress.
            </h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary" />
              <i class="fa fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <h4 class="service-heading">Languages</h4>
            <ul class="list-group text-muted">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Sass</li>
            </ul>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary" />
              <i class="fa fa-wrench fa-stack-1x fa-inverse" />
            </span>
            <h4 class="service-heading">Tools &amp; Frameworks</h4>
            <ul class="list-group text-muted">
              <li>npm</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>VS Code</li>
              <li>Wordpress</li>
            </ul>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary" />
              <i class="fa fa-star fa-stack-1x fa-inverse" />
            </span>
            <h4 class="service-heading">Accomplishments</h4>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/wGUyQbRnG8A"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;