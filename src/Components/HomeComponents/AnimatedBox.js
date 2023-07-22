import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TypeIt from 'typeit';
import 'animation.css'

const AnimatedBox = () => {
  const textRef = useRef(null);

  useEffect(() => {
    new TypeIt(textRef.current, {
      strings: [ "Connect" ," ","me"],
      speed: 50,
      waitUntilVisible: true,
    }).go();
  }, []);

  const colors = ['#ffc200', '#81dd','#ff8a00', '#ff4545', '#FF1493', '#4B0082', '#333'];
  const duration = 6; // Animation duration in seconds

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50, background: colors[0] }}
        animate={{
          opacity: 1,
          y: 0,
          background: colors,
          transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            border: '4px solid rgba(255, 255, 255, 0.5)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <div ref={textRef}></div>
      </motion.div>
    </div>
  );
};

export default AnimatedBox;
