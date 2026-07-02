import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { COLORS, ACCENTS, FONTS, PROFILE } from "../../utilities/constants";

function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
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
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="social" style={{ "--hc": ACCENTS.amber }}>
          <FaGithub size={17} />
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="social" style={{ "--hc": ACCENTS.teal }}>
          <FaLinkedin size={17} />
        </a>
        <a href={`mailto:${PROFILE.email}`} className="social" style={{ "--hc": ACCENTS.rose }}>
          <MdEmail size={17} />
        </a>
        <a href={`tel:${PROFILE.phone}`} className="social" style={{ "--hc": ACCENTS.amber }}>
          <MdPhone size={17} />
        </a>
        <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="social" style={{ "--hc": ACCENTS.teal }}>
          <FaWhatsapp size={17} />
        </a>
        <a href={PROFILE.liveSite} target="_blank" rel="noreferrer" className="social" style={{ "--hc": ACCENTS.violet }}>
          <FaGlobe size={17} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;