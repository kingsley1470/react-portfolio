import React from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";

import "./Footer.css";

const Footer = () => {
  const renderSocialLinks = () => (
    <MDBContainer className="social-links">
      <a
        href="https://www.linkedin.com/in/kingsley-nwachukwu/"
        className="social-link"
      >
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="https://github.com/kingsley1470" className="social-link">
        <MDBIcon fab icon="github" />
      </a>
      <a href="https://samflab.medium.com" className="social-link">
        <MDBIcon fab icon="medium-m" />
      </a>
    </MDBContainer>
  );

  return (
    <div className="Footer" id="footer">
      <h4 className="follow">Reach out to me at</h4>
      {renderSocialLinks()}
      <span>
        <p className="my-name">  Made by <br></br> Kingsley Nwachukwu ♡</p>
      </span>
      <Link
        id="scrollUp"
        to="top"
        smooth={true}
        style={{ position: "fixed", zIndex: "2147483647" }}
      >
        <i className="fas fa-angle-up"></i>
      </Link>
    </div>
  );
};

export default Footer;
