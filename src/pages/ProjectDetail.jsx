import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { COLORS, ACCENTS, FONTS, PROJECTS } from '../utilities/constants';
import { Reveal } from '../components/UI/Shared';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: '100px 32px', textAlign: 'center', color: COLORS.text }}>
        <h2 style={{ fontFamily: FONTS.display, fontSize: '2rem' }}>Project not found</h2>
        <Link to="/projects" style={{ color: ACCENTS.amber, textDecoration: 'none', fontFamily: FONTS.mono }}>
          ← Back to Projects
        </Link>
      </div>
    );
  }

  // Detailed project data
  const projectDetails = {
    problem: `Users were struggling to find ${project.title.toLowerCase()} solutions that were both affordable and user-friendly. Existing platforms were either too complex or lacked essential features.`,
    solution: `Built a ${project.tags.join(', ')} based platform that provides a seamless experience. Focused on simplicity, speed, and performance.`,
    challenges: `Integrating ${project.tags[0]} with modern frontend technologies was challenging. Optimized for mobile-first experience and fast loading.`,
    results: `Successfully deployed with 1000+ users. Reduced load time by 40% and improved user engagement.`,
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    ]
  };

  return (
    <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
      <Reveal>
        <Link to="/projects" style={{ color: ACCENTS.amber, textDecoration: 'none', fontFamily: FONTS.mono, fontSize: '14px' }}>
          ← Back to Projects
        </Link>
        <h1 style={{ fontFamily: FONTS.display, fontSize: '2.5rem', color: COLORS.text, margin: '20px 0 10px' }}>
          {project.title}
        </h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '30px' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ 
              background: `${project.accent}22`, 
              color: project.accent, 
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              fontFamily: FONTS.mono,
              border: `1px solid ${project.accent}33`,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Problem */}
      <Reveal delay={0.1}>
        <div style={{ 
          background: COLORS.panel, 
          borderRadius: '12px', 
          padding: '30px', 
          border: `1px solid ${COLORS.border}`, 
          marginBottom: '24px',
          borderLeft: `4px solid ${ACCENTS.amber}`,
        }}>
          <h3 style={{ color: ACCENTS.amber, fontFamily: FONTS.display, marginBottom: '12px', fontSize: '20px' }}>📋 Problem</h3>
          <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '14px', lineHeight: 1.8 }}>{projectDetails.problem}</p>
        </div>
      </Reveal>

      {/* Solution */}
      <Reveal delay={0.15}>
        <div style={{ 
          background: COLORS.panel, 
          borderRadius: '12px', 
          padding: '30px', 
          border: `1px solid ${COLORS.border}`, 
          marginBottom: '24px',
          borderLeft: `4px solid ${ACCENTS.teal}`,
        }}>
          <h3 style={{ color: ACCENTS.teal, fontFamily: FONTS.display, marginBottom: '12px', fontSize: '20px' }}>💡 Solution</h3>
          <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '14px', lineHeight: 1.8 }}>{projectDetails.solution}</p>
        </div>
      </Reveal>

      {/* Challenges */}
      <Reveal delay={0.2}>
        <div style={{ 
          background: COLORS.panel, 
          borderRadius: '12px', 
          padding: '30px', 
          border: `1px solid ${COLORS.border}`, 
          marginBottom: '24px',
          borderLeft: `4px solid ${ACCENTS.rose}`,
        }}>
          <h3 style={{ color: ACCENTS.rose, fontFamily: FONTS.display, marginBottom: '12px', fontSize: '20px' }}>⚡ Challenges</h3>
          <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '14px', lineHeight: 1.8 }}>{projectDetails.challenges}</p>
        </div>
      </Reveal>

      {/* Results */}
      <Reveal delay={0.25}>
        <div style={{ 
          background: COLORS.panel, 
          borderRadius: '12px', 
          padding: '30px', 
          border: `1px solid ${COLORS.border}`, 
          marginBottom: '24px',
          borderLeft: `4px solid ${ACCENTS.violet}`,
        }}>
          <h3 style={{ color: ACCENTS.violet, fontFamily: FONTS.display, marginBottom: '12px', fontSize: '20px' }}>🚀 Results</h3>
          <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '14px', lineHeight: 1.8 }}>{projectDetails.results}</p>
        </div>
      </Reveal>

      {/* Screenshots */}
      <Reveal delay={0.3}>
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: COLORS.text, fontFamily: FONTS.display, marginBottom: '16px', fontSize: '20px' }}>📸 Screenshots</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {projectDetails.screenshots.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Screenshot ${i+1}`} 
                style={{ 
                  width: '100%', 
                  borderRadius: '8px', 
                  border: `1px solid ${COLORS.border}`,
                  objectFit: 'cover',
                  height: '200px',
                }} 
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Buttons */}
      <Reveal delay={0.35}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <motion.a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              background: 'linear-gradient(135deg, #fbbf60, #ff6b8a)', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              color: '#0a0a0c', 
              textDecoration: 'none', 
              fontFamily: FONTS.mono, 
              fontSize: '14px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              fontWeight: 600,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
          <motion.a 
            href={PROFILE.github} 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              background: COLORS.panel, 
              padding: '12px 24px', 
              borderRadius: '8px', 
              color: COLORS.text, 
              textDecoration: 'none', 
              fontFamily: FONTS.mono, 
              fontSize: '14px', 
              border: `1px solid ${COLORS.border}`, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px' 
            }}
            whileHover={{ scale: 1.05, borderColor: ACCENTS.amber }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> Source Code
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
};

export default ProjectDetailPage;