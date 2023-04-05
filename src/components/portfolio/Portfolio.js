import { Component } from "react";
import "./portfolio.css";
 import   PIC1 from "../../assets/pic1.png";
 import PIC2 from "../../assets/pic2.png";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: PIC1,
    title: "landing page ",
    github: "https://github.com/kingsley1470",
    demo: "https://inext.dev"
  },
  {
    id: 2,
    image: PIC2,
    title: "landing page",
    github: "https://github.com/kingsley1470",
    // demo: "https://inext.dev"
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Crypto Currency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "CryptCurrency Dashboard & Financial Visualization",
  //   github: "https://github.com/inextdeve",
  //   demo: "https://inext.dev"
  // }
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
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                 <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="kingsley">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="kingsley2">
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
