import React, { Component } from "react";
import "./about.css";


class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="https://i.ibb.co/qrQr9R9/pro-pic.png"
              alt="kingsley-pic"
               height=""
               width=""
            />
          </div>
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider div2" />
            </h1>

            <h3 className="about-intro">
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
              <p>
                I am always eager to expand my knowledge and skill set. I am
                committed to writing clean, well-documented, and maintainable
                code. 
              </p>
              <p>
                In my previous projects, I have successfully implemented
                features such as user authentication and dynamic data
                visualization. I have also gained experience in deploying
                applications to various cloud platforms, such as Heroku and
                Netlify.
              </p>
              <p>
                I am confident in my ability to take on challenging projects and
                am excited to continue my growth as a full-stack developer.
              </p>
            </h3>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
