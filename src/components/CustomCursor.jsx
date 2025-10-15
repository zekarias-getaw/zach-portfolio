import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    document.addEventListener('mousemove', updateCursor);
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
          background: isPointer ? '#FF0080' : '#00BFFF'
        }}
      />
      <div 
        className="cursor-follower"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer ? 'scale(1.2)' : 'scale(1)'
        }}
      />
    </>
  );
};

export default CustomCursor;