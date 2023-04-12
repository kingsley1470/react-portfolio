import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
     
      getBeforeInit={(instance) => {
        instance
          .type("Web Developer.")
          .pause(750)
          .delete(20)
          .pause(500)
          .type("Front-End and Back-End.")
          .pause(750)
          .delete(26)
          .type("I bring your ideas  to life.");

    
        return instance;
      }}
    />
  );
}

export default Intro;
