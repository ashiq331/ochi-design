import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Button = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    // Animation timeline
    const tl = gsap.timeline({ paused: true });

    // Define the animation
    tl.to(button, { scale: 1.1, duration: 0.2 });

    // Mouse enter event
    const handleMouseEnter = () => {
      tl.play();
    };

    // Mouse leave event
    const handleMouseLeave = () => {
      tl.reverse();
    };

    // Add event listeners
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button ref={buttonRef} className=" text-black font-bold py-0 px-4 rounded">
      Lets go
    </button>
  );
};

export default Button;