import { Component } from "react";
import "./portfolio.css";
 import   PIC1 from "../../assets/pic1.png";
 import PIC2 from "../../assets/pic2.png";


const data = [
  {
    id: 1,
    image: PIC1,
    title: "landing page ",
    github: "https://github.com/kingsley1470",
    demo: "https://wbs-coworking.netlify.app/",
    
  },
  {
    id: 2,
    image: PIC2,
    title: "landing page",
    github: "https://github.com/kingsley1470",
    demo: "https://pokemon-fight.netlify.app/"
  },
 
];

class Portfolio extends Component {
  render() {
    return (
      <section id="projects">
        <h2 className="experienct__title" >Portfolio</h2>
        <hr
          className="divider"
          style={{
            margin: "auto"
          }}
        />
        <div className="container-p portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img  src={image} alt="" />
                </div>
                <h3>{title}</h3>
                 <div className="portfolio__item-cta">
                  <a style={{color: "#7da47db0"}} href={github} className="btn" target="kingsley">
                    Github
                  </a>
                  <a style={{color: "#7da47db0"}}  href={demo} className="btn btn-primary" target="kingsley2">
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

export default Portfolio;
