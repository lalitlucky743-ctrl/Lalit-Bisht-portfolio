import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { COLORS, ACCENTS, FONTS } from "../../utilities/constants";

function NavBar({ page, setPage, mobileOpen, setMobileOpen }) {
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

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(10,10,12,0.72)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => go("home")} className="logo-btn">
          <div className="logo-mark">LB</div>
          <span className="brand-text">Lalit Bisht</span>
        </button>

        <nav style={{ display: "flex", gap: "8px" }} className="desktop-nav">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link ${page === l.id ? "nav-active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            padding: "12px 32px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`nav-link nav-link-mobile ${page === l.id ? "nav-active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavBar;