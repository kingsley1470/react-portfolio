import React, { Component } from "react";
import "./about.css";
import { Details } from "./Details.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="https://i.pinimg.com/originals/31/0c/fa/310cfac3d064ea29c2401793496f06ac.png"
              alt="Masudha"
              height="300"
              width="300"
            />
          </div>
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
            <p>
              Hi!<br />I’m kingsley,<br />
              Junior Full-Stack Developer.<br />
              I am a career changer who went from building technology right into
              the innovative field of web development.I am also passionate about
              creating unique user interfaces and developing solutions that aim
              for a great user experience.
            </p>
            <p>
              As a junior full-stack developer, my goal is to contribute to the
              development of dynamic and scalable web applications. I have
              experience in both front-end and back-end technologies, including
              HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.
            </p>
            <p>
              I am a quick learner and am always eager to expand my knowledge
              and skillset. I am committed to writing clean, well-documented,
              and maintainable code. I am able to work well in a team
              environment and can effectively communicate with both technical
              and non-technical stakeholders.
            </p>
            <p>
              In my previous projects, I have successfully implemented features
              such as user authentication and dynamic data visualization. I have
              also gained experience in deploying applications to various cloud
              platforms, such as Heroku and Netlify.
            </p>
            <p>
              I am confident in my ability to take on challenging projects and
              am excited to continue my growth as a full-stack developer.
            </p>
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
