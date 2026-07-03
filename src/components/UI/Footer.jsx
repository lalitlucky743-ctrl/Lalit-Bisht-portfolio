import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { COLORS, ACCENTS, FONTS, PROFILE } from "../../utilities/constants";

function Footer({ theme }) {
  const getTextColor = () => {
    if (theme === 'dark') {
      return COLORS.textDim;
    }
    return 'rgba(0,0,0,0.4)';
  };

  const getBorderColor = () => {
    if (theme === 'dark') {
      return 'rgba(255,255,255,0.05)';
    }
    return 'rgba(0,0,0,0.05)';
  };

  const getSocialColor = () => {
    if (theme === 'dark') {
      return 'rgba(255,255,255,0.5)';
    }
    return 'rgba(0,0,0,0.4)';
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${getBorderColor()}`,
        padding: "36px 32px",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1180px",
        margin: "0 auto",
        transition: 'all 0.3s ease',
      }}
    >
      <span style={{ 
        fontFamily: FONTS.mono, 
        fontSize: "12px", 
        color: getTextColor(),
        transition: 'color 0.3s ease',
      }}>
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
            color: getSocialColor(),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: `1px solid ${getBorderColor()}`,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#fbbf60';
            e.target.style.borderColor = '#fbbf60';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #fbbf60';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = getSocialColor();
            e.target.style.borderColor = getBorderColor();
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
            color: getSocialColor(),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: `1px solid ${getBorderColor()}`,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#2fd9c4';
            e.target.style.borderColor = '#2fd9c4';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #2fd9c4';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = getSocialColor();
            e.target.style.borderColor = getBorderColor();
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <FaLinkedin size={17} />
        </a>
        <a 
          href={`mailto:${PROFILE.email}`} 
          className="social" 
          style={{ 
            "--hc": ACCENTS.rose,
            color: getSocialColor(),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: `1px solid ${getBorderColor()}`,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#ff6b8a';
            e.target.style.borderColor = '#ff6b8a';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #ff6b8a';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = getSocialColor();
            e.target.style.borderColor = getBorderColor();
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <MdEmail size={17} />
        </a>
        <a 
          href={`tel:${PROFILE.phone}`} 
          className="social" 
          style={{ 
            "--hc": ACCENTS.amber,
            color: getSocialColor(),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: `1px solid ${getBorderColor()}`,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#fbbf60';
            e.target.style.borderColor = '#fbbf60';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #fbbf60';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = getSocialColor();
            e.target.style.borderColor = getBorderColor();
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <MdPhone size={17} />
        </a>
        <a 
          href={PROFILE.whatsapp} 
          target="_blank" 
          rel="noreferrer" 
          className="social" 
          style={{ 
            "--hc": ACCENTS.teal,
            color: getSocialColor(),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: `1px solid ${getBorderColor()}`,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#2fd9c4';
            e.target.style.borderColor = '#2fd9c4';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #2fd9c4';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = getSocialColor();
            e.target.style.borderColor = getBorderColor();
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <FaWhatsapp size={17} />
        </a>
        <a 
          href={PROFILE.liveSite} 
          target="_blank" 
          rel="noreferrer" 
          className="social" 
          style={{ 
            "--hc": ACCENTS.violet,
            color: getSocialColor(),
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '999px',
            border: `1px solid ${getBorderColor()}`,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#a78bfa';
            e.target.style.borderColor = '#a78bfa';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 18px -6px #a78bfa';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = getSocialColor();
            e.target.style.borderColor = getBorderColor();
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <FaGlobe size={17} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;