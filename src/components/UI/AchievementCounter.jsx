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
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 50));
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
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        background: COLORS.panel,
        border: `1px solid ${color}33`,
        borderRadius: '12px',
        padding: '24px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      whileHover={{
        scale: 1.05,
        borderColor: color,
        boxShadow: `0 8px 32px ${color}22`,
      }}
    >
      <div style={{
        fontFamily: FONTS.display,
        fontSize: '36px',
        fontWeight: 700,
        color: color,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: '12px',
        color: COLORS.textDim,
        marginTop: '8px',
        letterSpacing: '0.05em',
      }}>
        {label}
      </div>
    </motion.div>
  );
};

export default AchievementCounter;