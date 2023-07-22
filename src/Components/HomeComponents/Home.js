import React, { Component } from "react";
 import Intro from "./Intro";
// import Mountain from "./Mountain";
import "./Home.css";
import AnimatedBox from "./AnimatedBox";

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="home_container">
          <div className="header">
            <span className="subheading">Hello,</span>
            <h2 className="myName"> I'm Kingsley Nwychukwu, and I'm thrilled to welcome you to my introduction page as a full-stack developer!</h2>
            <h2>
              <Intro /> 
            </h2>
            <br />
            <h2 className="great">My job is to build websites and web applications that are functional and user-friendly.</h2>
          </div>
          <div className="container2">
        <AnimatedBox />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
