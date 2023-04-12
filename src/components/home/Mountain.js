import React, { useRef, useEffect } from 'react';

function Mountain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // draw the mountain
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(250, 100);
    ctx.lineTo(400, 300);
    ctx.fillStyle = '#777777';
    ctx.fill();


    // draw the sun
    ctx.beginPath();
    ctx.arc(380, 80, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#e0e0d1';
    ctx.fill();
  }, []);

  return <canvas ref={canvasRef} width={400} height={300} />;
}

export default Mountain;
