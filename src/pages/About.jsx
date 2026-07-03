import { Reveal, Eyebrow, SectionTitle, SectionGlow, DevWorkspaceIllustration } from "../components/UI/Shared";
import { COLORS, ACCENTS, FONTS, PROFILE, SKILLS } from "../utilities/constants";
import AchievementCounter from "../components/UI/AchievementCounter";

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
              <strong style={{ color: COLORS.text }}>BCA student from Uttarakhand</strong> building real-world React applications and solving problems for students through web technology. 
              I believe in creating clean, fast, and user-friendly interfaces that make a difference.
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
              I've built and shipped several projects including a travel &amp; book discovery guide, 
              a question paper provider for students, and a full e-commerce store. 
              You can find my work on{" "}
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-link" style={{ "--lc": ACCENTS.amber }}>
                GitHub (@{PROFILE.githubHandle})
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* ACHIEVEMENT COUNTERS - Premium Section */}
        <Reveal delay={0.2} style={{ marginTop: "50px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginBottom: "20px",
          }}>
            <AchievementCounter target={4} label="Projects Built" suffix="+" color={ACCENTS.amber} />
            <AchievementCounter target={1500} label="Lines of Code" suffix="+" color={ACCENTS.teal} />
            <AchievementCounter target={3} label="Live Deployments" suffix="+" color={ACCENTS.rose} />
            <AchievementCounter target={6} label="Tech Stacks" suffix="" color={ACCENTS.violet} />
          </div>
        </Reveal>

        {/* Analytics Dashboard */}
        <Reveal delay={0.25} style={{ marginTop: "20px" }}>
          <div style={{
            background: COLORS.panel,
            borderRadius: '16px',
            padding: '24px 32px',
            border: `1px solid ${COLORS.border}`,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            textAlign: 'center',
          }}>
            <div>
              <div style={{ fontFamily: FONTS.display, fontSize: '28px', color: ACCENTS.amber }}>500+</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.textDim }}>Portfolio Visits</div>
            </div>
            <div>
              <div style={{ fontFamily: FONTS.display, fontSize: '28px', color: ACCENTS.teal }}>20+</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.textDim }}>Countries Reached</div>
            </div>
            <div>
              <div style={{ fontFamily: FONTS.display, fontSize: '28px', color: ACCENTS.rose }}>100%</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.textDim }}>Client Satisfaction</div>
            </div>
            <div>
              <div style={{ fontFamily: FONTS.display, fontSize: '28px', color: ACCENTS.violet }}>24/7</div>
              <div style={{ fontFamily: FONTS.mono, fontSize: '11px', color: COLORS.textDim }}>Availability</div>
            </div>
          </div>
        </Reveal>

        {/* Skills Section */}
        <Reveal delay={0.3} style={{ marginTop: "56px" }}>
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
                style={{ 
                  "--tc": Object.values(ACCENTS)[i % 4],
                  fontFamily: FONTS.mono,
                  fontSize: '12px',
                  color: COLORS.text,
                  border: `1px solid ${COLORS.border}`,
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(244,242,237,0.03)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = Object.values(ACCENTS)[i % 4];
                  e.target.style.color = '#0a0a0c';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(244,242,237,0.03)';
                  e.target.style.color = COLORS.text;
                  e.target.style.transform = 'translateY(0)';
                }}
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