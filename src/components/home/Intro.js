import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Web Developer.")
          .pause(750)
          .delete(20)
          .pause(500)
          .type("Open Source Contributor.")
          .pause(750)
          .delete(26)
          .type("I bring your ideas  to life.");

        // Remember to return it!
        return instance;
      }}
    />
  );
}

export default Intro;
