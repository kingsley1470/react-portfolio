import React, { Component } from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaNode,
  FaMdb,
  FaUserCircle,
  FaMagic,
  
} from "react-icons/fa";

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="experience-section">
        <h2 className="experience__title">My Skills</h2>
        <div className="divider"></div>
        <div className="container-skills experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaHtml5 className="experience__icon" />
                <div>
                  <h4>HTML</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaCss3 className="experience__icon" />
                <div>
                  <h4>CSS</h4>
                
                </div>
              </article>
              <article className="experience__details">
                <FaJs className="experience__icon" width={"10px"}/>
                <div>
                  <h4>Javascript</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaUserCircle className="experience__icon" />
                <div>
                  <h4>Tailwind</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaBootstrap className="experience__icon" />
                <div>
                  <h4>Bootstrap</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaReact className="experience__icon" />
                <div>
                  <h4>React</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaFigma className="experience__icon" />
                <div>
                  <h4>Figma</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaGithub className="experience__icon" />
                <div>
                  <h4>Github</h4>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaNodeJs className="experience__icon" />
                <div>
                  <h4>Node.js</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaNode className="experience__icon" />
                <div>
                  <h4>Express</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaMdb className="experience__icon" />
                <div>
                  <h4>Mdb</h4>
                </div>
              </article>
              <article className="experience__details">
                <FaMagic className="experience__icon" />
                <div>
                  <h4>MySQL</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
