
import React, { useState, useEffect } from 'react';
import './mode.css';
import { FaLightbulb } from 'react-icons/fa';


function Mode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`container-mode ${darkMode ? 'dark' : 'light'}`}>
       <button style={{width:"70px", height:"70px"}} className="toggle-btn" onClick={toggleDarkMode}>Switch
        <FaLightbulb />
      </button> 
      
    </div>
  );
}



export default Mode;


