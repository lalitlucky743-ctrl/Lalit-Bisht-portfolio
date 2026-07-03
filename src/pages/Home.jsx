import { FaGithub } from "react-icons/fa";
import Hero3D from "../components/3D/Hero3D";
import SkillsOrbit from "../components/3D/SkillsOrbit";
import { Reveal, Eyebrow, GlowBlobs } from "../components/UI/Shared";
import { motion } from "framer-motion";
import { COLORS, ACCENTS, FONTS, PROFILE } from "../utilities/constants";

function HomePage({ setPage }) {
  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "88vh",
          minHeight: "560px",
          background: `radial-gradient(ellipse at 50% 40%, ${COLORS.bgSoft} 0%, ${COLORS.bg} 65%, #060607 100%)`,
          overflow: "hidden",
        }}
      >
        <GlowBlobs />
        <Hero3D />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 8%",
            pointerEvents: "none",
          }}
        >
          <div style={{ pointerEvents: "auto" }}>
            <Reveal>
              <Eyebrow>Frontend React Developer</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <motion.h1
                className="gradient-text"
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "clamp(40px, 6vw, 84px)",
                  margin: 0,
                  lineHeight: 1.05,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {PROFILE.name}
              </motion.h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: "14px",
                  color: COLORS.textDim,
                  marginTop: "22px",
                  letterSpacing: "0.03em",
                  maxWidth: "440px",
                  lineHeight: 1.6,
                }}
              >
                {PROFILE.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    window.location.hash = "projects";
                    setPage("projects");
                  }}
                  className="btn-primary"
                >
                  View Projects
                </button>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-outline">
                  <FaGithub size={15} /> GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Orbit Section */}
      <section style={{ 
        position: "relative", 
        padding: "80px 20px",
        background: COLORS.bg,
        overflow: "hidden"
      }}>
        <Reveal>
          <h2 style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(28px, 4vw, 44px)",
            textAlign: "center",
            color: COLORS.text,
            marginBottom: "40px"
          }}>
            <span className="gradient-text">Tech Stack</span>
          </h2>
        </Reveal>
        <SkillsOrbit />
      </section>
    </>
  );
}

export default HomePage;