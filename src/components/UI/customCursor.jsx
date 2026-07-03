import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
      dot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('.card') ||
        target.closest('.project-card')
      ) {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.borderColor = '#fbbf60';
        cursor.style.background = 'rgba(251,191,96,0.1)';
      }
    };

    const onMouseOut = (e) => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.borderColor = 'rgba(255,255,255,0.2)';
      cursor.style.background = 'transparent';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
          transform: 'translate(-20px, -20px)',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#fbbf60',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-4px, -4px)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;