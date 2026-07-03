import { FaGithub } from "react-icons/fa";
import { MdCode, MdShoppingBag, MdDescription, MdMenuBook, MdPublic, MdStars } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { Reveal, Eyebrow, SectionTitle, SectionGlow } from "../components/UI/Shared";
import { motion } from "framer-motion";
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
        style={{ "--accent": project.accent }}
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
        <div className="card-bar" />
        <motion.div
          className="thumb"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}0d)`,
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
            <span key={tag} className="tag" style={{ "--tc": project.accent }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "18px" }}>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-link"
            style={{ "--lc": project.accent }}
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
            style={{ "--lc": project.accent }}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={13} /> Source
          </motion.a>
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
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>

        <Reveal delay={0.3}>
          <div className="callout">
            <MdStars size={18} color={ACCENTS.amber} />
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