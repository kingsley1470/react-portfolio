import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
     
      getBeforeInit={(instance) => {
        instance
          .type("Name: Kingsley </br>Profession: Full Stack Developer</br> </br> I am always eager to explore new trends and technologies, to enhance the overall user experience and optimize website performance.")
          
        
    
        return instance;
      }}
    />
  );
}

export default Intro;
