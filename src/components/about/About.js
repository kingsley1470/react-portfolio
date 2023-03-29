import React, { useState } from "react";
import "./about.css";

const images = [
  "",
 
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageChange = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className="container">
      <h1>About Us</h1>
      <img
        src={images[activeIndex]}
        alt="About Us"
        className="image"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel
        placerat est, vitae commodo nisi. Aliquam commodo ullamcorper mauris, eu
        bibendum arcu euismod vel. Donec maximus libero sed est commodo, vel
        iaculis mauris tincidunt. Sed lobortis sapien id commodo efficitur. Sed
        vel mauris et dolor commodo aliquam. Fusce venenatis tellus eget ipsum
        aliquam tristique. Fusce euismod odio a elit blandit consectetur. Ut
        pharetra commodo sapien sed mollis.
      </p>
      <button onClick={handleImageChange}>Next Image</button>
    </div>
  );
};

export default About;
