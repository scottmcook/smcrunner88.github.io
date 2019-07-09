import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

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
                <a href="https://twitter.com/smcrunner88">
                  <FontAwesomeIcon size="6x" icon={faTwitterSquare} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/SMCRunner88">
                  <FontAwesomeIcon size="6x" icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/scott-cook/">
                  <FontAwesomeIcon size="6x" icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:smcrunner88@gmail.com">
                  <FontAwesomeIcon size="6x" icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
