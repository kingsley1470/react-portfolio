import React from "react";
// import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { BrowserRouter as Routex, Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavbarComponents/Navbar";
import Home from "./Components/HomeComponents/Home";
import Skills from "./Components/SkillsComponents/Skills";
import About from "./Components/AboutComponents/About";
import Projects from "./Components/ProjectsComponents/Projects";
import Contact from "./Components/ContactComponents/Contact";
// import "./App.css";
import Footer from "./Components/FooterComponents/Footer";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Routex>
  );
}

export default App;
