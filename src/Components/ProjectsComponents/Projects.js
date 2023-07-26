import { Component } from "react";
import "./Project.css";
import PIC1 from "../../Images/pic1.png";
import PIC2 from "../../Images/pic2.png";

const data = [
  {
    id: 1,
    image: PIC1,
    title: "Landing Page",
    github: "https://github.com/kingsley1470",
    demo: "https://wbs-coworking.netlify.app/",
  },
  {
    id: 2,
    image: PIC2,
    title: "Landing Page",
    github: "https://github.com/kingsley1470",
    demo: "https://pokemon-fight.netlify.app/"
  },
];

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="project-container">
        <h2 className="experience__title">Projects</h2>
        <hr className="divider" style={{ margin: "auto" }} />
        <div className="container-p portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Projects;

