 import React, { Component } from "react";
import { MenuItems } from './MenuItems';
import { Link } from "react-scroll";
import "./Navbar.css";
import Mode from "./Mode"


class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <nav className="NavbarItems" id="top">
        <h1 className="navbar-logo">
          <Link to="home" spy={true} smooth={true}>
          <h1>kcn</h1>
          </Link>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                className={item.cName}
                style={{ textDecoration: "none" }}
              >
                <li key={index}>{item.title}</li>
              </Link>
            
            );
          })}
        </ul>  
        <div>
          <Mode />
              </div>
      </nav>
    );
  }
}
export default Navbar;
