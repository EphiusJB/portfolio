// cursor shadow
"use client";
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ 
    padding: '2rem', fontSize: '1.2rem', position: 'absolute',
    width: '100px',
    height: '100px',
    backgroundColor: 'rgb(3, 80, 101)',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 40vw 40vh rgb(4, 80, 101)',
    opacity: 0.2,
    zIndex: -1,
    left: `${position.x}px`,
    top: `${position.y}px`
    }}>
    </div>
  );
}
