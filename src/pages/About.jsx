import { Reveal, Eyebrow, SectionTitle, SectionGlow, DevWorkspaceIllustration } from "../components/UI/Shared";
import { COLORS, ACCENTS, FONTS, PROFILE, SKILLS } from "../utilities/constants";

function AboutPage() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <SectionGlow tone="cool" />
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "100px 32px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <Eyebrow color={ACCENTS.teal}>About</Eyebrow>
          <SectionTitle>Hi, I'm {PROFILE.name}.</SectionTitle>
        </Reveal>

        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "center" }}>
          <Reveal delay={0.06} style={{ flex: "1 1 300px", maxWidth: "380px" }}>
            <div className="illustration-panel">
              <DevWorkspaceIllustration />
            </div>
          </Reveal>

          <Reveal delay={0.14} style={{ flex: "1 1 360px" }}>
            <p
              style={{
                fontFamily: FONTS.mono,
                fontSize: "15px",
                lineHeight: 1.9,
                color: COLORS.textDim,
                maxWidth: "560px",
              }}
            >
              I'm a frontend React developer and a passionate builder of clean, fast,
              user-friendly web interfaces. I enjoy turning ideas into real, working
              products — from planning the structure to shipping the final UI.
            </p>
            <p
              style={{
                fontFamily: FONTS.mono,
                fontSize: "15px",
                lineHeight: 1.9,
                color: COLORS.textDim,
                maxWidth: "560px",
                marginTop: "20px",
              }}
            >
              I've built and shipped several projects including a travel &amp; book
              discovery guide, a question paper provider for students, and a full
              e-commerce store. You can find my work on{" "}
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-link" style={{ "--lc": ACCENTS.amber }}>
                GitHub (@{PROFILE.githubHandle})
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} style={{ marginTop: "56px" }}>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: ACCENTS.amber,
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Skills
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {SKILLS.map((skill, i) => (
              <span
                key={skill}
                className="tag"
                style={{ "--tc": Object.values(ACCENTS)[i % 4] }}
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutPage;