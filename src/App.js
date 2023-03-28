import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Routex, Switch, Route } from "react-router-dom";

import Skills from "./components/skills/Skills";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Skills />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </Routex>
  );
}

export default App;
