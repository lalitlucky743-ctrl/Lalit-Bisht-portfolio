import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdMessage, MdSend } from "react-icons/md";
import { Reveal, Eyebrow, SectionTitle, SectionGlow, MailIllustration } from "../components/UI/Shared";
import { motion } from "framer-motion";
import { COLORS, ACCENTS, FONTS, PROFILE } from "../utilities/constants";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);

  const handleTerminalCommand = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    let output = '';
    
    if (cmd === 'whoami') {
      output = `> ${PROFILE.name}\n> ${PROFILE.role}`;
    } else if (cmd === 'skills') {
      output = '> React, JavaScript, Node.js, Firebase, Git, Three.js';
    } else if (cmd === 'current_goal') {
      output = '> Frontend Developer Internship';
    } else if (cmd === 'projects') {
      output = '> 4+ Projects: E-Commerce, Question Paper, Travel Guide, Portfolio';
    } else if (cmd === 'contact') {
      output = `> Email: ${PROFILE.email}\n> Phone: ${PROFILE.phoneDisplay}\n> GitHub: ${PROFILE.githubHandle}`;
    } else if (cmd === 'help') {
      output = '> Available commands: whoami, skills, current_goal, projects, contact, help, clear';
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else if (cmd === '') {
      output = '';
    } else {
      output = `> Command not found: ${cmd}. Type 'help' for available commands.`;
    }
    
    if (output) {
      setTerminalOutput([...terminalOutput, { command: cmd, output }]);
    }
    setTerminalInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <SectionGlow tone="warm" />
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "100px 32px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <Eyebrow color={ACCENTS.violet}>Get in touch</Eyebrow>
          <SectionTitle>Contact</SectionTitle>
        </Reveal>

        <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
          <Reveal delay={0.08} style={{ flex: "1 1 320px" }}>
            <div className="illustration-panel" style={{ maxWidth: "320px", marginBottom: "28px" }}>
              <MailIllustration />
            </div>

            <p
              style={{
                fontFamily: FONTS.mono,
                fontSize: "14px",
                lineHeight: 1.8,
                color: COLORS.textDim,
                maxWidth: "440px",
                marginBottom: "24px",
              }}
            >
              Have a project in mind or just want to connect? Call, message on
              WhatsApp, email directly, or use the form — every path reaches me.
            </p>

            {/* Contact Links with Icons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <motion.a 
                href={`tel:${PROFILE.phone}`} 
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(251,191,96,0.05)',
                  border: '1px solid rgba(251,191,96,0.1)',
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(251,191,96,0.12)',
                  borderColor: '#fbbf60',
                  x: 8,
                  boxShadow: '0 4px 20px rgba(251,191,96,0.15)',
                }}
              >
                <MdPhone size={22} color="#fbbf60" />
                <span>{PROFILE.phoneDisplay}</span>
              </motion.a>

              <motion.a 
                href={PROFILE.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(47,217,196,0.05)',
                  border: '1px solid rgba(47,217,196,0.1)',
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(47,217,196,0.12)',
                  borderColor: '#2fd9c4',
                  x: 8,
                  boxShadow: '0 4px 20px rgba(47,217,196,0.15)',
                }}
              >
                <FaWhatsapp size={22} color="#2fd9c4" />
                <span>Message on WhatsApp</span>
              </motion.a>

              <motion.a 
                href={`mailto:${PROFILE.email}`}
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(255,107,138,0.05)',
                  border: '1px solid rgba(255,107,138,0.1)',
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(255,107,138,0.12)',
                  borderColor: '#ff6b8a',
                  x: 8,
                  boxShadow: '0 4px 20px rgba(255,107,138,0.15)',
                }}
              >
                <MdEmail size={22} color="#ff6b8a" />
                <span>{PROFILE.email}</span>
              </motion.a>

              <motion.a 
                href={PROFILE.github} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(167,139,250,0.05)',
                  border: '1px solid rgba(167,139,250,0.1)',
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(167,139,250,0.12)',
                  borderColor: '#a78bfa',
                  x: 8,
                  boxShadow: '0 4px 20px rgba(167,139,250,0.15)',
                }}
              >
                <FaGithub size={22} color="#a78bfa" />
                <span>github.com/{PROFILE.githubHandle}</span>
              </motion.a>

              <motion.a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(47,217,196,0.05)',
                  border: '1px solid rgba(47,217,196,0.1)',
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(47,217,196,0.12)',
                  borderColor: '#2fd9c4',
                  x: 8,
                  boxShadow: '0 4px 20px rgba(47,217,196,0.15)',
                }}
              >
                <FaLinkedin size={22} color="#2fd9c4" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a 
                href={PROFILE.liveSite} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(251,191,96,0.05)',
                  border: '1px solid rgba(251,191,96,0.1)',
                  fontFamily: FONTS.mono,
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(251,191,96,0.12)',
                  borderColor: '#fbbf60',
                  x: 8,
                  boxShadow: '0 4px 20px rgba(251,191,96,0.15)',
                }}
              >
                <FaGlobe size={22} color="#fbbf60" />
                <span>lalits-portfol.netlify.app</span>
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.16} style={{ flex: "1 1 360px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '16px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 style={{
                fontFamily: FONTS.display,
                color: '#ffffff',
                fontSize: '20px',
                marginBottom: '20px',
                textAlign: 'center',
              }}>
                <span className="gradient-text">Send a Message</span>
              </h3>
              
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input"
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: '13px',
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      outline: 'none',
                      width: '100%',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#fbbf60';
                      e.target.style.boxShadow = '0 0 20px rgba(251,191,96,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input"
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: '13px',
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      outline: 'none',
                      width: '100%',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ff6b8a';
                      e.target.style.boxShadow = '0 0 20px rgba(255,107,138,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <textarea
                    required
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input"
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: '13px',
                      color: '#ffffff',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      outline: 'none',
                      width: '100%',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#a78bfa';
                      e.target.style.boxShadow = '0 0 20px rgba(167,139,250,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 8px 30px rgba(251,191,96,0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                    color: '#0a0a0c',
                    border: 'none',
                    padding: '14px 32px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #fbbf60, #ff6b8a)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientMove 3s ease infinite',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    justifyContent: 'center',
                    width: '100%',
                    fontWeight: 600,
                  }}
                >
                  <MdSend size={18} />
                  Send Message
                </motion.button>
                
                {sent && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      fontFamily: FONTS.mono, 
                      fontSize: '12px', 
                      color: ACCENTS.teal,
                      textAlign: 'center',
                      padding: '10px',
                      background: 'rgba(47,217,196,0.1)',
                      borderRadius: '8px',
                      border: '1px solid rgba(47,217,196,0.2)',
                    }}
                  >
                    📧 Opening your email app addressed to {PROFILE.email}
                  </motion.span>
                )}
              </form>
            </motion.div>

            {/* Terminal Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginTop: "30px" }}
            >
              <div style={{
                background: '#0a0a0c',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid rgba(255,255,255,0.05)',
                fontFamily: FONTS.mono,
                fontSize: '13px',
                maxHeight: '200px',
                overflowY: 'auto',
              }}>
                <div style={{ color: ACCENTS.teal, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🖥️</span> Terminal — try: whoami, skills, current_goal
                </div>
                {terminalOutput.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ marginBottom: '6px' }}
                  >
                    <div style={{ color: ACCENTS.amber }}>{`$ ${item.command}`}</div>
                    <div style={{ color: '#ffffff', whiteSpace: 'pre-line' }}>{item.output}</div>
                  </motion.div>
                ))}
                <form onSubmit={handleTerminalCommand} style={{ display: 'flex', gap: '10px', marginTop: '6px', alignItems: 'center' }}>
                  <span style={{ color: ACCENTS.amber, fontWeight: 600 }}>$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontFamily: FONTS.mono,
                      fontSize: '13px',
                      outline: 'none',
                      flex: 1,
                      padding: '4px 0',
                    }}
                    placeholder="Enter command..."
                    autoFocus
                  />
                </form>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;