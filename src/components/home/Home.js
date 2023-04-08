import React, { Component } from "react";
import Intro from "./Intro";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="home_container">
          <div className="header">
            <span class="subheading">Hey! I am </span>
            <h1 className="myName"> kingsley Nwachukwu!</h1>
            <h2>
              <Intro />
            </h2>
            <br />
            <h2 className="great">My job is to build websites and web applications that are functional, user-friendly.</h2>
             {/* <button className="contact-me"> Contact Me</button>  */}
          </div>
          <div className="container2">
            <div className="hero-shape custom-animation">
              <img
                src="images/coding.jpeg"
                alt="animation"
                height="100%"
                width="50"
                style={{ opacity: "0.5" }}
              />
            </div>
            {/* <div className="image image-fluid">
              <img
                src="images/coding.jpeg"
                alt="coding-pic"
                height="300"
                width="300"
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
