import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, LinearProgress, Paper, Grid, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: <WebIcon sx={{ color: '#667eea' }} />,
    skills: [
      { name: 'React.js', level: 90, color: '#61DAFB' },
      { name: 'JavaScript', level: 85, color: '#F7DF1E' },
      { name: 'HTML5 & CSS3', level: 90, color: '#E34F26' },
      { name: 'Tailwind CSS', level: 80, color: '#06B6D4' },
      { name: 'Material-UI', level: 85, color: '#007FFF' },
    ]
  },
  {
    category: 'Backend & Database',
    icon: <StorageIcon sx={{ color: '#764ba2' }} />,
    skills: [
      { name: 'Node.js', level: 75, color: '#339933' },
      { name: 'Express.js', level: 70, color: '#000000' },
      { name: 'MongoDB', level: 70, color: '#47A248' },
      { name: 'Firebase', level: 65, color: '#FFCA28' },
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: <CodeIcon sx={{ color: '#f093fb' }} />,
    skills: [
      { name: 'Git & GitHub', level: 85, color: '#F05032' },
      { name: 'Three.js', level: 70, color: '#000000' },
      { name: 'Framer Motion', level: 75, color: '#0055FF' },
      { name: 'REST APIs', level: 80, color: '#FF6C37' },
    ]
  },
  {
    category: 'UI/UX Design',
    icon: <DesignServicesIcon sx={{ color: '#4ecdc4' }} />,
    skills: [
      { name: 'Responsive Design', level: 90, color: '#4ecdc4' },
      { name: 'Prototyping', level: 70, color: '#FF6B6B' },
      { name: 'User Research', level: 65, color: '#FFE66D' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2">💻 My Skills</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', mb: 6, fontSize: '1.1rem' }}>
          Technologies and tools I work with to build amazing applications
        </Typography>

        <Grid container spacing={3}>
          {skillCategories.map((category, catIndex) => (
            <Grid item xs={12} md={6} key={catIndex}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <Paper className="glass-card" sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    {category.icon}
                    <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: '600' }}>
                      {category.category}
                    </Typography>
                  </Box>
                  
                  {category.skills.map((skill, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: skill.color, fontWeight: '500' }}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: '8px',
                          borderRadius: '4px',
                          background: 'rgba(255,255,255,0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                            borderRadius: '4px',
                            transition: 'width 1s ease'
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Paper className="glass-card" sx={{ p: 4, mt: 4 }}>
            <Typography variant="h6" sx={{ textAlign: 'center', color: '#ffffff', mb: 3 }}>
              🏷️ Tech Stack Overview
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
              {['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Three.js', 
                'Git', 'Firebase', 'Tailwind CSS', 'Material-UI', 'Framer Motion', 
                'REST APIs', 'HTML5', 'CSS3', 'Redux', 'Next.js', 'TypeScript'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Chip
                    label={tech}
                    sx={{
                      background: 'rgba(102, 126, 234, 0.15)',
                      color: '#667eea',
                      border: '1px solid rgba(102, 126, 234, 0.2)',
                      fontSize: '0.9rem',
                      padding: '20px 8px',
                      '&:hover': {
                        background: 'rgba(102, 126, 234, 0.25)',
                        borderColor: '#667eea'
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Paper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;