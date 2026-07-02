import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Button, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const HeroContainer = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '20px 40px',
  position: 'relative',
  maxWidth: '1200px',
  margin: '0 auto',
});

const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  border: '3px solid rgba(74, 158, 255, 0.3)',
  boxShadow: '0 8px 32px rgba(74, 158, 255, 0.15)',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #4a9eff, #6c5ce7)',
});

const Hero = () => {
  return (
    <section id="home">
      <HeroContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <Box sx={{ 
            display: 'inline-flex', 
            gap: 1, 
            mb: 3,
            px: 2,
            py: 0.5,
            borderRadius: '50px',
            border: '1px solid rgba(74, 158, 255, 0.2)',
            background: 'rgba(74, 158, 255, 0.05)'
          }}>
            <Typography variant="caption" sx={{ color: '#4a9eff', fontWeight: '500' }}>
              FRONTEND
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
              •
            </Typography>
            <Typography variant="caption" sx={{ color: '#4a9eff', fontWeight: '500' }}>
              REACT
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
              •
            </Typography>
            <Typography variant="caption" sx={{ color: '#4a9eff', fontWeight: '500' }}>
              DEVELOPER
            </Typography>
          </Box>

          {/* Name */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '3.5rem', md: '5.5rem' },
              fontWeight: '700',
              color: '#ffffff',
              mb: 1,
              letterSpacing: '-2px'
            }}
          >
            Lalit Bisht
          </Typography>

          {/* Description */}
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '500px',
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: '400',
              lineHeight: '1.4'
            }}
          >
            Passionate developer who builds clean<br />
            useful web experiences.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                href="#projects"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #4a9eff, #6c5ce7)',
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 32px rgba(74, 158, 255, 0.3)',
                  '&:hover': { 
                    boxShadow: '0 12px 40px rgba(74, 158, 255, 0.5)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                View Projects
              </Button>
            </motion.div>
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <motion.a 
              whileHover={{ scale: 1.1, y: -3 }} 
              whileTap={{ scale: 0.9 }}
              href="https://github.com/lalitlucky743" 
              target="_blank"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <GitHubIcon sx={{ fontSize: 28 }} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -3 }} 
              whileTap={{ scale: 0.9 }}
              href="#" 
              target="_blank"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, y: -3 }} 
              whileTap={{ scale: 0.9 }}
              href="#" 
              target="_blank"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <TwitterIcon sx={{ fontSize: 28 }} />
            </motion.a>
          </Box>
        </motion.div>
      </HeroContainer>
    </section>
  );
};

export default Hero;