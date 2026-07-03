import { FaGithub } from "react-icons/fa";
import { MdCode, MdShoppingBag, MdDescription, MdMenuBook, MdPublic, MdStars } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, Eyebrow, SectionTitle, SectionGlow } from "../components/UI/Shared";
import { COLORS, ACCENTS, FONTS, PROFILE, PROJECTS } from "../utilities/constants";

const PROJECT_ICON = {
  ecommerce: MdShoppingBag,
  papers: MdDescription,
  travel: MdMenuBook,
  portfolio: MdPublic,
};

function ProjectCard({ project, index }) {
  const Icon = PROJECT_ICON[project.id] || MdCode;
  
  return (
    <Reveal delay={index * 0.08}>
      <motion.div 
        className="card project-card"
        style={{ 
          "--accent": project.accent,
          border: `1px solid ${COLORS.border}`,
          background: COLORS.panel,
          borderRadius: '8px',
          padding: '30px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow: `0 20px 60px ${project.accent}44`,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="card-bar" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '100%',
          background: project.accent,
        }} />
        
        <motion.div
          className="thumb"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}0d)`,
            padding: '20px',
            borderRadius: '6px',
            display: 'inline-flex',
            marginBottom: '16px',
          }}
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={40} color={project.accent} />
        </motion.div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MdCode size={18} color={project.accent} />
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
            <span
              key={tag}
              className="tag"
              style={{
                "--tc": project.accent,
                fontFamily: FONTS.mono,
                fontSize: '11.5px',
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
                padding: '6px 12px',
                borderRadius: '999px',
                background: 'rgba(244,242,237,0.03)',
                transition: 'all 0.25s ease',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-link"
            style={{
              "--lc": project.accent,
              fontFamily: FONTS.mono,
              fontSize: '12.5px',
              color: project.accent,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.25s ease, opacity 0.25s ease',
            }}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Visit live site <FiExternalLink size={13} />
          </motion.a>
          
          <motion.a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-link"
            style={{
              "--lc": project.accent,
              fontFamily: FONTS.mono,
              fontSize: '12.5px',
              color: project.accent,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.25s ease, opacity 0.25s ease',
            }}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={13} /> Source
          </motion.a>

          <Link
            to={`/project/${project.id}`}
            style={{
              fontFamily: FONTS.mono,
              fontSize: '12.5px',
              color: COLORS.textDim,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              borderBottom: '1px solid transparent',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = project.accent;
              e.target.style.borderColor = project.accent;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = COLORS.textDim;
              e.target.style.borderColor = 'transparent';
            }}
          >
            View Details →
          </Link>
        </div>
      </motion.div>
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
          <div className="callout" style={{
            marginTop: '48px',
            padding: '26px 28px',
            border: `1px dashed ${COLORS.border}`,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <MdStars size={18} color={ACCENTS.amber} />
            <span style={{ fontFamily: FONTS.mono, fontSize: "13px", color: COLORS.textDim }}>
              More projects and full source code are on my GitHub —{" "}
              <a 
                href={PROFILE.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-link" 
                style={{ 
                  "--lc": ACCENTS.amber,
                  fontFamily: FONTS.mono,
                  fontSize: '12.5px',
                  color: ACCENTS.amber,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.25s ease, opacity 0.25s ease',
                }}
              >
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