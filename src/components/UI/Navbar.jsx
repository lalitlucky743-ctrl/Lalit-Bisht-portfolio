import { useState } from "react";
import { MdMenu, MdClose, MdLightMode, MdDarkMode, MdSearch } from "react-icons/md";
import { motion } from "framer-motion";
import { FONTS, COLORS } from "../../utilities/constants";

function NavBar({ currentPage, navigateTo, toggleTheme, theme, setIsCommandPaletteOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const isActive = (id) => currentPage === id;

  // Theme based styles
  const getBackground = () => {
    if (theme === 'dark') {
      return 'rgba(10,10,12,0.85)';
    }
    return 'rgba(245,245,247,0.9)';
  };

  const getTextColor = () => {
    if (theme === 'dark') {
      return '#ffffff';
    }
    return '#1a1a2e';
  };

  const getBorderColor = () => {
    if (theme === 'dark') {
      return 'rgba(255,255,255,0.05)';
    }
    return 'rgba(0,0,0,0.05)';
  };

  const getNavLinkColor = (active) => {
    if (theme === 'dark') {
      return active ? '#fbbf60' : 'rgba(255,255,255,0.6)';
    }
    return active ? '#fbbf60' : 'rgba(0,0,0,0.6)';
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: getBackground(),
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${getBorderColor()}`,
        boxShadow: theme === 'dark' ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
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
        {/* Logo */}
        <button 
          onClick={() => navigateTo("home")}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px' 
          }}
        >
          <div className="logo-mark" style={{
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
          }}>
            LB
          </div>
          <span className="brand-text" style={{ 
            fontFamily: FONTS.mono, 
            fontSize: '14px', 
            color: getTextColor(),
            letterSpacing: '0.05em',
            transition: 'color 0.3s ease',
          }}>
            Lalit Bisht
          </span>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => navigateTo(l.id)}
              className={`nav-link ${isActive(l.id) ? "nav-active" : ""}`}
              style={{
                color: getNavLinkColor(isActive(l.id)),
                fontWeight: isActive(l.id) ? '600' : '400',
                padding: '8px 18px',
                borderRadius: '8px',
                background: isActive(l.id) ? (theme === 'dark' ? 'rgba(251,191,96,0.08)' : 'rgba(251,191,96,0.1)') : 'none',
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
              {isActive(l.id) && (
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
            </button>
          ))}
          
          {/* Command Palette Button */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            style={{
              background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              border: `1px solid ${getBorderColor()}`,
              color: getTextColor(),
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: FONTS.mono,
              fontSize: '12px',
              transition: 'all 0.3s ease',
            }}
          >
            <MdSearch size={16} />
            <span style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>⌘K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              border: `1px solid ${getBorderColor()}`,
              color: getTextColor(),
              cursor: 'pointer',
              padding: '8px 12px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              marginLeft: '4px',
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 180,
              backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)} 
          style={{ 
            color: getTextColor(), 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            padding: '8px',
            display: 'none',
          }}
        >
          {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            overflow: 'hidden',
            borderTop: `1px solid ${getBorderColor()}`,
            padding: '12px 32px 20px',
            background: theme === 'dark' ? 'rgba(10,10,12,0.95)' : 'rgba(245,245,247,0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                navigateTo(l.id);
                setMobileOpen(false);
              }}
              className={`nav-link nav-link-mobile ${isActive(l.id) ? "nav-active" : ""}`}
              style={{
                color: getNavLinkColor(isActive(l.id)),
                padding: '10px 4px',
                fontWeight: isActive(l.id) ? '600' : '400',
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
            </button>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileOpen(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: getNavLinkColor(false),
              cursor: 'pointer',
              padding: '10px 4px',
              textAlign: 'left',
              fontFamily: FONTS.mono,
              fontSize: '13px',
              transition: 'all 0.3s ease',
            }}
          >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}

export default NavBar;