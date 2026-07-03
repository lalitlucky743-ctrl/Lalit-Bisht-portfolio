import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFileDownload, FaEnvelope, FaProjectDiagram, FaBlog, FaUser, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { COLORS, ACCENTS, FONTS, PROFILE } from '../../utilities/constants';

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { icon: FaUser, label: 'Go to About', action: () => navigate('/about') },
    { icon: FaProjectDiagram, label: 'Go to Projects', action: () => navigate('/projects') },
    { icon: FaBlog, label: 'Go to Blog', action: () => navigate('/blog') },
    { icon: FaFileAlt, label: 'Go to Resume', action: () => navigate('/resume') },
    { icon: FaEnvelope, label: 'Go to Contact', action: () => navigate('/contact') },
    { icon: FaGithub, label: 'Open GitHub', action: () => window.open(PROFILE.github, '_blank') },
    { icon: FaFileDownload, label: 'Download Resume', action: () => window.open('/resume.pdf', '_blank') },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }
      if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '560px',
              width: '100%',
              background: COLORS.panel,
              borderRadius: '16px',
              border: `1px solid ${COLORS.border}`,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${COLORS.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: ACCENTS.amber, fontFamily: FONTS.mono, fontSize: '14px' }}>⌘</span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command..."
                  autoFocus
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: COLORS.text,
                    fontFamily: FONTS.mono,
                    fontSize: '14px',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <span style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '12px' }}>
                  {filteredCommands.length} results
                </span>
              </div>
            </div>
            <div style={{ padding: '8px', maxHeight: '300px', overflowY: 'auto' }}>
              {filteredCommands.map((cmd, index) => (
                <motion.button
                  key={cmd.label}
                  onClick={() => { cmd.action(); setIsOpen(false); }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 16px',
                    width: '100%',
                    borderRadius: '8px',
                    background: index === selectedIndex ? 'rgba(255,255,255,0.06)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: COLORS.text,
                    fontFamily: FONTS.mono,
                    fontSize: '13px',
                    transition: 'background 0.2s ease',
                  }}
                >
                  <cmd.icon size={18} color={ACCENTS.amber} />
                  {cmd.label}
                  <span style={{ marginLeft: 'auto', color: COLORS.textDim, fontSize: '11px' }}>
                    {index === 0 && '⌘+Enter'}
                  </span>
                </motion.button>
              ))}
            </div>
            <div style={{ padding: '10px 20px', borderTop: `1px solid ${COLORS.border}`, display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '11px' }}>
                Press ⌘K to open · Esc to close
              </span>
              <span style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '11px' }}>
                ↑↓ to navigate
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;