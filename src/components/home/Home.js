import React, { Component } from "react";
import Intro from "./Intro";
import Mountain from "./Mountain";
 import "./home.css";
// import Mode from "./Mode";

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="home_container">
          <div className="header">
            <span class="subheading">Hey! <br></br>I am </span>
            <h1 className="myName"> kingsley Nwachukwu!</h1>
            <h2>
              <Intro />
            </h2>
            <br />
            <h2 className="great">My job is to build websites and web applications that are functional, user-friendly.</h2>
             
          </div>
          <div className="container2">
             <div className="hero-shape custom-animation">
              <Mountain />
            </div> 
        
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
