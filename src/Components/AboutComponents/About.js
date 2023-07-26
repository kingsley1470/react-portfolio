import React, { Component } from "react";
import "./About.css";
import "animate.css";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container-about">
          <div className="about-image animate__animated animate__fadeIn">
            <img
              src="https://i.ibb.co/qrQr9R9/pro-pic.png"
              alt="kingsley-pic"
              className="animate__animated animate__zoomIn"
              width="200"
              height="200"
            />
          </div>
          <div className="about-section animate__animated animate__fadeIn">
            <h2 className="about-header">About Me</h2>
            <div className="about-grid">
              <div className="about-intro">
                <p>
                  I am passionate about creating unique user interfaces and
                  developing solutions that aim for a great user experience.
                </p>
                <p>
                  As a full-stack developer, my goal is to contribute to the
                  development of dynamic and scalable web applications. I have
                  experience in both front-end and back-end technologies,
                  including HTML, CSS, JavaScript, React, Node.js, Express, and
                  MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
