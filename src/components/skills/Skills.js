import React, { Component } from "react";
import SkillsIcons from "./Icons";


class Skills extends Component {
  render() {
    return (
      <div className="skills"  id="skill">
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Skills
        </h3>

        <SkillsIcons />
      </div>
    );
  }
}

export default Skills;
