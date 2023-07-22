import React, { Component } from "react";
import { MenuItems } from './MenuItems';
import { Link } from "react-scroll";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  };

  handleMenuClick = () => {
    this.setState({ clicked: false });
  };

  renderMenuItems = () => {
    return MenuItems.map((item, index) => (
      <li key={index}>
        <Link
          to={item.url}
          spy={true}
          smooth={true}
          className={item.cName}
          style={{ textDecoration: "none" }}
          onClick={this.handleMenuClick}
        >
          {item.title}
        </Link>
      </li>
    ));
  };

  render() {
    const { clicked } = this.state;

    return (
      <nav className="NavbarItems" id="top">
        <h1 className="navbar-logo">
          <Link to="home" spy={true} smooth={true}>
            kcn
          </Link>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {this.renderMenuItems()}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
