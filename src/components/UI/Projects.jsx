import { Code2, Sparkles, ExternalLink, GitHub, ShoppingBag, FileText, BookOpen, Globe } from "lucide-react";
import { Reveal, Eyebrow, SectionTitle, SectionGlow } from "../components/UI/Shared";
import { COLORS, ACCENTS, FONTS, PROFILE, PROJECTS } from "../utilities/constants";

const PROJECT_ICON = {
  ecommerce: ShoppingBag,
  papers: FileText,
  travel: BookOpen,
  portfolio: Globe,
};

function ProjectCard({ project, index }) {
  const Icon = PROJECT_ICON[project.id] || Code2;
  return (
    <Reveal delay={index * 0.08}>
      <div className="card" style={{ "--accent": project.accent }}>
        <div className="card-bar" />
        <div
          className="thumb"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}0d)`,
          }}
        >
          <Icon size={40} color={project.accent} strokeWidth={1.5} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Code2 size={18} color={project.accent} />
          <h3
            style={{
              fontFamily: FONTS.display,
              fontSize: "21px",
              color: COLORS.text,
              margin: 0,
              fontWeight: 600,
            }}
          >
            {project.title}
          </h3>
        </div>
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: "13.5px",
            lineHeight: 1.75,
            color: COLORS.textDim,
            margin: "16px 0",
          }}
        >
          {project.summary}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag" style={{ "--tc": project.accent }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "18px" }}>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-link" style={{ "--lc": project.accent }}>
            Visit live site <ExternalLink size={13} />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-link" style={{ "--lc": project.accent }}>
            <GitHub size={13} /> Source
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectsPage() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <SectionGlow tone="mixed" />
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "100px 32px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <Eyebrow color={ACCENTS.rose}>Selected Work</Eyebrow>
          <SectionTitle>Projects</SectionTitle>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="callout">
            <Sparkles size={18} color={ACCENTS.amber} />
            <span style={{ fontFamily: FONTS.mono, fontSize: "13px", color: COLORS.textDim }}>
              More projects and full source code are on my GitHub —{" "}
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-link" style={{ "--lc": ACCENTS.amber }}>
                @{PROFILE.githubHandle}
              </a>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectsPage;