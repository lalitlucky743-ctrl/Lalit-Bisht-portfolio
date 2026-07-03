import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaAward, FaUser } from 'react-icons/fa';
import { COLORS, ACCENTS, FONTS, PROFILE, SKILLS } from '../utilities/constants';
import { Reveal, SectionTitle } from '../components/UI/Shared';

const education = [
  { year: '2022-2025', degree: 'BCA (Bachelor of Computer Applications)', institution: 'Uttarakhand University', description: 'Focus on Web Development, Database Management, and Programming' }
];

const experience = [
  { year: '2024-Present', title: 'Frontend React Developer', company: 'Freelance', description: 'Building web applications with React, Three.js, and modern technologies.' }
];

const ResumePage = () => {
  return (
    <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
      <Reveal>
        <SectionTitle>📄 Resume</SectionTitle>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #fbbf60, #ff6b8a)',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              color: '#0a0a0c',
              fontFamily: FONTS.mono,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 600,
            }}
            onClick={() => alert('Resume PDF will be available soon!')}
          >
            <FaDownload /> Download PDF
          </motion.button>
        </div>
      </Reveal>

      {/* Education */}
      <Reveal delay={0.15}>
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontFamily: FONTS.display, fontSize: '22px', color: COLORS.text, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaGraduationCap color={ACCENTS.amber} /> Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: COLORS.panel,
                borderRadius: '12px',
                padding: '20px 24px',
                border: `1px solid ${COLORS.border}`,
                borderLeft: `4px solid ${ACCENTS.amber}`,
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h4 style={{ fontFamily: FONTS.display, fontSize: '18px', color: COLORS.text }}>{edu.degree}</h4>
                <span style={{ color: ACCENTS.amber, fontFamily: FONTS.mono, fontSize: '13px' }}>{edu.year}</span>
              </div>
              <p style={{ color: ACCENTS.teal, fontFamily: FONTS.mono, fontSize: '14px' }}>{edu.institution}</p>
              <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '13px', marginTop: '6px' }}>{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* Experience */}
      <Reveal delay={0.2}>
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontFamily: FONTS.display, fontSize: '22px', color: COLORS.text, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaBriefcase color={ACCENTS.rose} /> Experience
          </h3>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: COLORS.panel,
                borderRadius: '12px',
                padding: '20px 24px',
                border: `1px solid ${COLORS.border}`,
                borderLeft: `4px solid ${ACCENTS.rose}`,
                marginBottom: '12px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h4 style={{ fontFamily: FONTS.display, fontSize: '18px', color: COLORS.text }}>{exp.title}</h4>
                <span style={{ color: ACCENTS.rose, fontFamily: FONTS.mono, fontSize: '13px' }}>{exp.year}</span>
              </div>
              <p style={{ color: ACCENTS.teal, fontFamily: FONTS.mono, fontSize: '14px' }}>{exp.company}</p>
              <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '13px', marginTop: '6px' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* Skills */}
      <Reveal delay={0.25}>
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontFamily: FONTS.display, fontSize: '22px', color: COLORS.text, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaCode color={ACCENTS.violet} /> Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {SKILLS.map((skill, i) => (
              <span key={skill} style={{ background: `${Object.values(ACCENTS)[i % 4]}22`, color: Object.values(ACCENTS)[i % 4], padding: '6px 16px', borderRadius: '20px', fontFamily: FONTS.mono, fontSize: '13px', border: `1px solid ${Object.values(ACCENTS)[i % 4]}33` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Achievements */}
      <Reveal delay={0.3}>
        <div>
          <h3 style={{ fontFamily: FONTS.display, fontSize: '22px', color: COLORS.text, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaAward color={ACCENTS.amber} /> Achievements
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {['4+ Projects Built', '1000+ Lines of Code', '3+ Live Deployments', '6+ Tech Stacks'].map((achievement, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: COLORS.panel,
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: `1px solid ${COLORS.border}`,
                  textAlign: 'center',
                  fontFamily: FONTS.mono,
                  fontSize: '14px',
                  color: COLORS.text,
                }}
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ResumePage;