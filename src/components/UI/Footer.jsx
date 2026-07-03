import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { COLORS, ACCENTS, FONTS, PROFILE } from "../../utilities/constants";

function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid rgba(255,255,255,0.05)`,
        padding: "36px 32px",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1180px",
        margin: "0 auto",
      }}
    >
      <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: COLORS.textDim }}>
        © {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Three.js.
      </span>
      <div style={{ display: "flex", gap: "8px" }}>
        <a 
          href={PROFILE.github} 
          target="_blank" 
          rel="noreferrer" 
          className="social" 
          style={{ 
            "--hc": ACCENTS.amber,
            color: 'rgba(255,255,255,0.5)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#fbbf60';
            e.target.style.borderColor = '#fbbf60';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #fbbf60';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'rgba(255,255,255,0.5)';
            e.target.style.borderColor = 'rgba(255,255,255,0.08)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <FaGithub size={17} />
        </a>
        <a 
          href={PROFILE.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="social" 
          style={{ 
            "--hc": ACCENTS.teal,
            color: 'rgba(255,255,255,0.5)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#2fd9c4';
            e.target.style.borderColor = '#2fd9c4';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #2fd9c4';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'rgba(255,255,255,0.5)';
            e.target.style.borderColor = 'rgba(255,255,255,0.08)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <FaLinkedin size={17} />
        </a>
        {/* ... similar for other icons */}
      </div>
    </footer>
  );
}

export default Footer;