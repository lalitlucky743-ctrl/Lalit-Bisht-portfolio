import { useState, useEffect } from "react";
import NavBar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import { COLORS, ACCENTS } from "./utilities/constants";
import "./App.css";

export default function App() {
  const [page, setPage] = useState(() => window.location.hash.replace("#", "") || "home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.replace("#", "") || "home";
      setPage(next);
    };
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) window.location.hash = "home";
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  let content;
  if (page === "about") content = <AboutPage />;
  else if (page === "projects") content = <ProjectsPage />;
  else if (page === "contact") content = <ContactPage />;
  else content = <HomePage setPage={setPage} />;

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }

        .gradient-text {
          background: linear-gradient(100deg, #f4f2ed 20%, ${ACCENTS.amber} 55%, ${ACCENTS.rose} 75%, ${ACCENTS.violet} 95%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.28;
          pointer-events: none;
        }
        .blob-a { width: 360px; height: 360px; background: ${ACCENTS.rose}; top: -80px; left: 6%; animation: floatA 14s ease-in-out infinite; }
        .blob-b { width: 420px; height: 420px; background: ${ACCENTS.teal}; bottom: -120px; right: 4%; animation: floatB 16s ease-in-out infinite; }
        .blob-c { width: 300px; height: 300px; background: ${ACCENTS.violet}; top: 40%; right: 30%; animation: floatC 18s ease-in-out infinite; }
        
        @keyframes floatA { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px, 40px); } }
        @keyframes floatB { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-40px, -30px); } }
        @keyframes floatC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(20px, -20px) scale(1.1); } }

        .section-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          pointer-events: none;
        }
        .section-blob-a { width: 300px; height: 300px; top: -100px; left: -50px; }
        .section-blob-b { width: 350px; height: 350px; bottom: -100px; right: -50px; }

        .logo-btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 10px; }
        .logo-mark {
          width: 34px; height: 34px; border-radius: 8px;
          border: 1px solid ${ACCENTS.amber};
          display: flex; align-items: center; justify-content: center;
          font-family: "Playfair Display", Georgia, serif; color: ${ACCENTS.amber}; font-size: 16px; font-weight: 600;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .logo-btn:hover .logo-mark { box-shadow: 0 0 18px ${ACCENTS.amber}55; transform: rotate(-6deg); }
        .brand-text { font-family: "JetBrains Mono", monospace; font-size: 13px; color: ${COLORS.text}; letter-spacing: 0.05em; display: none; }

        .nav-link {
          background: none; border: none; cursor: pointer;
          font-family: "JetBrains Mono", monospace; font-size: 13px; letter-spacing: 0.05em;
          color: ${COLORS.textDim}; padding: 8px 14px; border-radius: 999px;
          transition: color 0.25s ease, background 0.25s ease;
        }
        .nav-link:hover { color: ${COLORS.text}; background: rgba(244,242,237,0.06); }
        .nav-active { color: ${ACCENTS.amber} !important; background: rgba(251,191,96,0.1) !important; }
        .nav-link-mobile { padding: 10px 4px; border-radius: 0; }

        .mobile-toggle { display: none; background: none; border: none; color: ${COLORS.text}; cursor: pointer; }

        @media (min-width: 720px) {
          .brand-text { display: inline-block !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 719px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }

        .btn-primary {
          font-family: "JetBrains Mono", monospace; font-size: 13px; letter-spacing: 0.05em;
          color: #0a0a0c; border: none; padding: 13px 26px; border-radius: 4px; cursor: pointer;
          background: linear-gradient(100deg, ${ACCENTS.amber}, ${ACCENTS.rose});
          background-size: 200% 100%; background-position: 0% 0%;
          transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }
        .btn-primary:hover {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(251,191,96,0.28);
        }

        .btn-outline {
          font-family: "JetBrains Mono", monospace; font-size: 13px; letter-spacing: 0.05em;
          color: ${COLORS.text}; border: 1px solid ${COLORS.border}; padding: 13px 26px; border-radius: 4px;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .btn-outline:hover { border-color: ${ACCENTS.teal}; color: ${ACCENTS.teal}; transform: translateY(-2px); }

        .card {
          border: 1px solid ${COLORS.border};
          background: ${COLORS.panel};
          border-radius: 8px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 22px 44px -18px var(--accent);
        }
        .card-bar { position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--accent); }
        .thumb { padding: 20px; border-radius: 6px; display: inline-flex; margin-bottom: 16px; }

        .tag {
          font-family: "JetBrains Mono", monospace; font-size: 11.5px; color: ${COLORS.text};
          border: 1px solid ${COLORS.border}; padding: 6px 12px; border-radius: 999px;
          background: rgba(244,242,237,0.03);
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .tag:hover { background: var(--tc); border-color: var(--tc); color: #0a0a0c; transform: translateY(-2px); }

        .inline-link {
          font-family: "JetBrains Mono", monospace; font-size: 12.5px; color: var(--lc, ${ACCENTS.amber});
          text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
          border-bottom: 1px solid transparent; transition: border-color 0.25s ease, opacity 0.25s ease;
        }
        .inline-link:hover { border-color: var(--lc, ${ACCENTS.amber}); opacity: 0.85; }

        .contact-row {
          display: flex; align-items: center; gap: 10px;
          color: ${COLORS.text}; font-family: "JetBrains Mono", monospace; font-size: 13px;
          text-decoration: none; padding: 8px 0; transition: color 0.25s ease, transform 0.2s ease;
        }
        .contact-row svg { color: var(--rc); transition: filter 0.25s ease; }
        .contact-row:hover { color: var(--rc); transform: translateX(4px); }
        .contact-row:hover svg { filter: drop-shadow(0 0 6px var(--rc)); }

        .social {
          color: ${COLORS.textDim}; display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 999px; border: 1px solid ${COLORS.border};
          transition: color 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .social:hover {
          color: var(--hc); border-color: var(--hc); transform: translateY(-3px);
          box-shadow: 0 8px 18px -6px var(--hc);
        }

        .callout {
          margin-top: 48px; padding: 26px 28px; border: 1px dashed ${COLORS.border}; border-radius: 8px;
          display: flex; align-items: center; gap: 14px;
        }

        .input {
          font-family: "JetBrains Mono", monospace; font-size: 13px; color: ${COLORS.text};
          background: ${COLORS.panel}; border: 1px solid ${COLORS.border}; border-radius: 4px;
          padding: 13px 16px; outline: none; width: 100%;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .input::placeholder { color: #5c616a; }
        .input:focus { border-color: ${ACCENTS.amber}; box-shadow: 0 0 0 3px rgba(251,191,96,0.12); }

        .illustration-panel {
          background: ${COLORS.panel};
          border: 1px solid ${COLORS.border};
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.3s ease;
        }
        .illustration-panel:hover { transform: scale(1.02); }
      `}</style>

      <NavBar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {content}
      <Footer />
    </div>
  );
}