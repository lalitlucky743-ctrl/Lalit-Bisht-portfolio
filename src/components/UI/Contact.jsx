import { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdMessage } from "react-icons/md";
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

            {/* Contact Links - No Blue Color, With Icons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <motion.a 
                href={`tel:${PROFILE.phone}`} 
                className="contact-row" 
                style={{ 
                  "--rc": ACCENTS.amber,
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(251,191,96,0.1)',
                  borderColor: '#fbbf60',
                  x: 5,
                }}
              >
                <MdPhone size={20} color="#fbbf60" />
                <span>{PROFILE.phoneDisplay}</span>
              </motion.a>

              <motion.a 
                href={PROFILE.whatsapp} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-row" 
                style={{ 
                  "--rc": ACCENTS.teal,
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(47,217,196,0.1)',
                  borderColor: '#2fd9c4',
                  x: 5,
                }}
              >
                <FaWhatsapp size={20} color="#2fd9c4" />
                <span>Message on WhatsApp</span>
              </motion.a>

              <motion.a 
                href={`mailto:${PROFILE.email}`} 
                className="contact-row" 
                style={{ 
                  "--rc": ACCENTS.rose,
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(255,107,138,0.1)',
                  borderColor: '#ff6b8a',
                  x: 5,
                }}
              >
                <MdEmail size={20} color="#ff6b8a" />
                <span>{PROFILE.email}</span>
              </motion.a>

              <motion.a 
                href={PROFILE.github} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-row" 
                style={{ 
                  "--rc": ACCENTS.amber,
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(251,191,96,0.1)',
                  borderColor: '#fbbf60',
                  x: 5,
                }}
              >
                <FaGithub size={20} color="#fbbf60" />
                <span>github.com/{PROFILE.githubHandle}</span>
              </motion.a>

              <motion.a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-row" 
                style={{ 
                  "--rc": ACCENTS.teal,
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(47,217,196,0.1)',
                  borderColor: '#2fd9c4',
                  x: 5,
                }}
              >
                <FaLinkedin size={20} color="#2fd9c4" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a 
                href={PROFILE.liveSite} 
                target="_blank" 
                rel="noreferrer" 
                className="contact-row" 
                style={{ 
                  "--rc": ACCENTS.violet,
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  background: 'rgba(167,139,250,0.1)',
                  borderColor: '#a78bfa',
                  x: 5,
                }}
              >
                <FaGlobe size={20} color="#a78bfa" />
                <span>lalits-portfol.netlify.app</span>
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.16} style={{ flex: "1 1 360px" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
              />
              <textarea
                required
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input"
                style={{ resize: "vertical" }}
              />
              <motion.button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send message
              </motion.button>
              {sent && (
                <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: ACCENTS.teal }}>
                  Opening your email app addressed to {PROFILE.email} — send it from
                  there and the message lands directly in my inbox.
                </span>
              )}
            </form>

            {/* Terminal Section */}
            <div style={{ marginTop: "30px" }}>
              <div style={{
                background: '#0a0a0c',
                borderRadius: '8px',
                padding: '16px',
                border: `1px solid rgba(255,255,255,0.05)`,
                fontFamily: FONTS.mono,
                fontSize: '13px',
                maxHeight: '200px',
                overflowY: 'auto',
              }}>
                <div style={{ color: ACCENTS.teal, marginBottom: '8px' }}>
                  🖥️ Terminal — try: whoami, skills, current_goal
                </div>
                {terminalOutput.map((item, i) => (
                  <div key={i} style={{ marginBottom: '4px' }}>
                    <div style={{ color: ACCENTS.amber }}>{`$ ${item.command}`}</div>
                    <div style={{ color: '#ffffff', whiteSpace: 'pre-line' }}>{item.output}</div>
                  </div>
                ))}
                <form onSubmit={handleTerminalCommand} style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <span style={{ color: ACCENTS.amber }}>$</span>
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
                    }}
                    placeholder="Enter command..."
                    autoFocus
                  />
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;