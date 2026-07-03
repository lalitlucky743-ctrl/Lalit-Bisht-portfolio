import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdClose, MdLightMode, MdDarkMode, MdSearch } from "react-icons/md";
import { motion } from "framer-motion";
import { FONTS } from "../../utilities/constants";

function NavBar({ toggleTheme, theme, setIsCommandPaletteOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "resume", label: "Resume", path: "/resume" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
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
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
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
          <span className="brand-text" style={{ fontFamily: FONTS.mono, fontSize: '14px', color: '#ffffff', letterSpacing: '0.05em' }}>
            Lalit Bisht
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.path}
              className={`nav-link ${isActive(l.path) ? "nav-active" : ""}`}
              style={{
                color: isActive(l.path) ? '#fbbf60' : 'rgba(255,255,255,0.6)',
                fontWeight: isActive(l.path) ? '600' : '400',
                padding: '8px 18px',
                borderRadius: '8px',
                background: isActive(l.path) ? 'rgba(251,191,96,0.08)' : 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: FONTS.mono,
                fontSize: '13px',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              {l.label}
              {isActive(l.path) && (
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
            </Link>
          ))}
          
          {/* Command Palette Button */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#ffffff',
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
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>⌘K</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
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
              marginLeft: '4px',
            }}
          >
            {theme === 'dark' ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)} 
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
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '12px 32px 20px',
            background: 'rgba(10,10,12,0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className={`nav-link nav-link-mobile ${isActive(l.path) ? "nav-active" : ""}`}
              style={{
                color: isActive(l.path) ? '#fbbf60' : 'rgba(255,255,255,0.6)',
                padding: '10px 4px',
                fontWeight: isActive(l.path) ? '600' : '400',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: FONTS.mono,
                fontSize: '14px',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleTheme();
              setMobileOpen(false);
            }}
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
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}

export default NavBar;