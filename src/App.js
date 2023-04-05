import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Routex, Switch, Route } from "react-router-dom";
import Skills from "./components/skills/Experience";
import Footer from "./components/footer/Footer";
import Experience from "./components/skills/Experience";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Nav />
        <Home />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Routex>
  );
}

export default App;
