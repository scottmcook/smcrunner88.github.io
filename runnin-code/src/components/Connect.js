import React from "react";

const Connect = () => {
  return (
    <section id="connect">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Connect With Me</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="fa-stack fa-4x">
                  <a href="https://twitter.com/smcrunner88">
                    <i className="fa fa-square fa-stack-2x text-primary" />
                    <i className="fa fa-twitter fa-stack-1x fa-inverse" />
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-4x">
                  <a href="https://github.com/SMCRunner88">
                    <i className="fa fa-square fa-stack-2x text-primary" />
                    <i className="fa fa-github fa-stack-1x fa-inverse" />
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-4x">
                  <a href="https://www.linkedin.com/in/scott-cook/">
                    <i className="fa fa-square fa-stack-2x text-primary" />
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="fa-stack fa-4x">
                  <a href="mailto:smcrunner88@gmail.com">
                    <i className="fa fa-square fa-stack-2x text-primary" />
                    <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
