import React, { useState, useEffect, useRef } from "react";

const GradientEffect: React.FC = () => {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [trailCoords, setTrailCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    setCoords({ x: event.clientX, y: event.clientY });
  };

  const updateTrail = () => {
    setTrailCoords((prev) => {
      const newX = prev.x + (coords.x - prev.x) * 0.1; // Adjust this value to control the trailing speed
      const newY = prev.y + (coords.y - prev.y) * 0.1; // Adjust this value to control the trailing speed
      return { x: newX, y: newY };
    });
    
    animationRef.current = requestAnimationFrame(updateTrail);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(updateTrail); // Start the animation

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current); // Cleanup animation on unmount
      }
    };
  }, [coords]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: -1, // Set zIndex to -1 to ensure it appears behind content
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: `${trailCoords.y}px`,
          left: `${trailCoords.x}px`,
          width: '300px', // Size of the gradient
          height: '300px', // Size of the gradient
          borderRadius: '50%',
          background: `radial-gradient(circle, 
            rgba(78, 117, 255, 0.5), 
            rgba(157, 52, 255, 0.4), 
            rgba(1, 105, 225, 0.3), 
            rgba(3, 4, 255, 0.2) 
          )`, // Multiple colors added
          transform: 'translate(-50%, -50%)', // Center the gradient around the cursor
          filter: 'blur(60px)', // Increased blur for a softer effect
          transition: 'background 0.1s ease-in-out',
        }}
      />
    </div>
  );
};

export default GradientEffect;
