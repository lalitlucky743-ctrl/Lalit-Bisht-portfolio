import { motion } from "framer-motion";
import { COLORS, ACCENTS, FONTS } from "../../utilities/constants";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 70); // 7 seconds mein 100% complete
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: COLORS.bg,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      overflow: 'hidden',
    }}>
      {/* Background Glow Effect */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${ACCENTS.amber}22, transparent 70%)`,
        animation: 'pulseGlow 2s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Second Glow */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${ACCENTS.rose}22, transparent 70%)`,
        animation: 'pulseGlow 3s ease-in-out infinite reverse',
        pointerEvents: 'none',
        bottom: '20%',
        right: '10%',
      }} />

      {/* Main Logo */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontFamily: FONTS.display,
            fontSize: '80px',
            fontWeight: 700,
            background: `linear-gradient(135deg, ${ACCENTS.amber}, ${ACCENTS.rose}, ${ACCENTS.violet})`,
            backgroundSize: '300% 300%',
            animation: 'gradientMove 3s ease infinite',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: `0 0 60px ${ACCENTS.amber}33`,
          }}
        >
          LB
        </motion.div>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          fontFamily: FONTS.mono,
          fontSize: '14px',
          color: COLORS.textDim,
          marginTop: '20px',
          letterSpacing: '0.1em',
        }}
      >
        Loading Experience...
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          marginTop: '30px',
          width: '240px',
          height: '3px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${ACCENTS.amber}, ${ACCENTS.rose})`,
            borderRadius: '2px',
            position: 'relative',
          }}
        >
          {/* Progress Glow */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: '-2px',
            width: '20px',
            height: '7px',
            background: `radial-gradient(ellipse, ${ACCENTS.amber}88, transparent)`,
            filter: 'blur(4px)',
          }} />
        </motion.div>
      </motion.div>

      {/* Loading Percentage */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          fontFamily: FONTS.mono,
          fontSize: '12px',
          color: COLORS.textDim,
          marginTop: '12px',
          letterSpacing: '0.05em',
        }}
      >
        {progress}%
      </motion.div>

      {/* Loading Dots Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          gap: '8px',
          marginTop: '20px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: ACCENTS.amber,
            }}
          />
        ))}
      </motion.div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;