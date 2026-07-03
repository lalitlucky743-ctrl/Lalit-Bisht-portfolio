import { motion } from "framer-motion";
import { COLORS, ACCENTS, FONTS } from "../../utilities/constants";

const LoadingScreen = () => {
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
    }}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{
          fontFamily: FONTS.display,
          fontSize: '60px',
          fontWeight: 700,
          background: `linear-gradient(135deg, ${ACCENTS.amber}, ${ACCENTS.rose}, ${ACCENTS.violet})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          LB
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          fontFamily: FONTS.mono,
          fontSize: '14px',
          color: COLORS.textDim,
          marginTop: '20px',
        }}
      >
        Loading Experience...
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        style={{
          width: 200,
          height: 2,
          background: `linear-gradient(90deg, ${ACCENTS.amber}, ${ACCENTS.rose})`,
          marginTop: '30px',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

export default LoadingScreen;