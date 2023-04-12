 import { Component } from "react";
// import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

import { FaHtml5, FaCss3, FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaNode,
  FaMdb,
  
  
} from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

class Experience extends Component {
  render() {
    return (
      <section id="skills">
        <h2 className="experienct__title" >My Experiences</h2>
        <hr
          className="divider"
          style={{
            margin: "auto"
          }}
        />
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaHtml5   />
                <div>
                  <h4>HTML</h4>
            
                </div>
              </article>
              <article className="experience__details">
                <FaCss3 />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaJs />
                <div>
                  <h4>Javascript</h4>
          
                </div>
              </article>
              <article className="experience__details">
                <FaUserCircle />
                <div>
                  <h4>Tailwind</h4>
             
                </div>
              </article>
              <article className="experience__details">
                <FaBootstrap />
                <div>
                  <h4>Bootstrap</h4>
                  
                </div>
              </article>
              <article className="experience__details">
                <FaReact />
                <div>
                  <h4>React</h4>
           
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
             <FaNodeJs />
                <div>
                  <h4>NodeJs</h4>
                  
                </div>
              </article>
              <article className="experience__details">
                <FaNode  />
                <div>
                  <h4>Express</h4>
                
                </div>
              </article>
              <article className="experience__details">
                <FaMdb  />
                <div>
                  <h4>Mdb</h4>
                 
                </div>
              </article>
              <article className="experience__details">
                <FaGithub  />
                <div>
                  <h4>Github</h4>
                 
                </div>
              </article>
              <article className="experience__details">
              
                <div>
                  <h4>MySql</h4>
              
                </div>
              </article>
              <article className="experience__details">
                <FaFigma className="experience__details-icon" />
                <div>
                  <h4>FiGma</h4>
              
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
