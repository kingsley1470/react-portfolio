import React, { Component } from "react";
import Intro from "./Intro";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="container">
          <div className="header">
            <span class="subheading">Hey! I am </span>
            <h1 className="myName"> kingsley Nwachukwu!</h1>
            <h2>
              <Intro />
            </h2>
            <br />
            <h2 className="great">Great ideas,<span class="bold"></span> beautifully executed & commercially.</h2>
             <button className="contact-me"> Contact Me</button> 
          </div>
          <div className="container">
            <div className="hero-shape custom-animation">
              <img
                src="images/2055208.svg"
                alt="animation"
                height="50"
                width="50"
                style={{ opacity: "0.5" }}
              />
            </div>
            <div className="image image-fluid">
              <img
                src="images/coding.jpeg"
                alt="coding-pic"
                height="300"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
