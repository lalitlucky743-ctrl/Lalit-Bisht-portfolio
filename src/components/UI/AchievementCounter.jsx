import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { COLORS, FONTS } from "../../utilities/constants";

const AchievementCounter = ({ target, label, suffix, color }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / (target / step));
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={isVisible ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
      style={{
        background: COLORS.panel,
        border: `1px solid ${color}33`,
        borderRadius: '14px',
        padding: '24px 16px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        scale: 1.08,
        borderColor: color,
        boxShadow: `0 8px 40px ${color}22`,
        y: -5,
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle, ${color}11, transparent 70%)`,
        opacity: 0,
        transition: 'opacity 0.4s ease',
      }} />
      
      <motion.div
        style={{
          fontFamily: FONTS.display,
          fontSize: '40px',
          fontWeight: 700,
          color: color,
          position: 'relative',
          zIndex: 1,
        }}
        animate={{ scale: isVisible ? 1 : 0.5 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
      >
        {count}{suffix}
      </motion.div>
      
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: '12px',
        color: COLORS.textDim,
        marginTop: '8px',
        letterSpacing: '0.05em',
        position: 'relative',
        zIndex: 1,
      }}>
        {label}
      </div>
    </motion.div>
  );
};

export default AchievementCounter;