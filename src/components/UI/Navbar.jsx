import { useState } from "react";
import { MdMenu, MdClose, MdLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { COLORS, ACCENTS, FONTS } from "../../utilities/constants";

function NavBar({ page, setPage, mobileOpen, setMobileOpen, toggleTheme, theme }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const go = (id) => {
    window.location.hash = id;
    setPage(id);
    setMobileOpen(false);
  };

  // Navbar animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10,10,12,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo with Premium Gradient */}
        <motion.button 
          onClick={() => go("home")} 
          className="logo-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <motion.div 
            className="logo-mark"
            whileHover={{ 
              rotate: -10,
              boxShadow: "0 0 30px rgba(251,191,96,0.3)"
            }}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #fbbf60, #ff6b8a, #a78bfa)',
              backgroundSize: '200% 200%',
              animation: 'gradientMove 3s ease infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: FONTS.display,
              color: '#0a0a0c',
              fontSize: '18px',
              fontWeight: 700,
              transition: 'all 0.3s ease',
            }}
          >
            LB
          </motion.div>
          <motion.span 
            className="brand-text" 
            style={{ 
              fontFamily: FONTS.mono, 
              fontSize: '14px', 
              color: '#ffffff',
              letterSpacing: '0.05em',
              fontWeight: 500,
            }}
            whileHover={{ color: '#fbbf60' }}
          >
            Lalit Bisht
          </motion.span>
        </motion.button>

        {/* Desktop Nav */}
        <motion.nav 
          style={{ display: "flex", gap: "4px", alignItems: "center" }} 
          className="desktop-nav"
          variants={itemVariants}
        >
          {links.map((l, index) => (
            <motion.button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link ${page === l.id ? "nav-active" : ""}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(251,191,96,0.08)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: page === l.id ? '#fbbf60' : 'rgba(255,255,255,0.6)',
                fontWeight: page === l.id ? '600' : '400',
                padding: '8px 18px',
                borderRadius: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: FONTS.mono,
                fontSize: '13px',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
            >
              {l.label}
              {/* Active indicator line */}
              {page === l.id && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #fbbf60, #ff6b8a)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </motion.button>
          ))}
          
          {/* Theme Toggle with Animation */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ 
              scale: 1.1,
              rotate: 180,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: '#fbbf60',
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              marginLeft: '8px',
            }}
          >
            {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            color: '#ffffff',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
        >
          {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileOpen ? 'auto' : 0,
          opacity: mobileOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{
          overflow: 'hidden',
          borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.05)' : 'none',
          padding: mobileOpen ? '12px 32px 20px' : '0 32px',
          background: 'rgba(10,10,12,0.95)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {links.map((l) => (
          <motion.button
            key={l.id}
            onClick={() => go(l.id)}
            className={`nav-link nav-link-mobile ${page === l.id ? "nav-active" : ""}`}
            whileHover={{ x: 10, color: '#fbbf60' }}
            style={{
              color: page === l.id ? '#fbbf60' : 'rgba(255,255,255,0.6)',
              padding: '10px 4px',
              fontWeight: page === l.id ? '600' : '400',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: FONTS.mono,
              fontSize: '14px',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
            }}
          >
            {l.label}
          </motion.button>
        ))}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ x: 10, color: '#fbbf60' }}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            padding: '10px 4px',
            textAlign: 'left',
            fontFamily: FONTS.mono,
            fontSize: '13px',
            transition: 'all 0.3s ease',
          }}
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </motion.button>
      </motion.div>

      {/* Add keyframes for gradient animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (max-width: 719px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
        @media (min-width: 720px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}

export default NavBar;