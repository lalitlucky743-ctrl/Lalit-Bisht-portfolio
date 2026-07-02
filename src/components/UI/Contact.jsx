import { useState } from "react";
import { Phone, MessageCircle, Mail, GitHub, Linkedin, Globe } from "lucide-react";
import { Reveal, Eyebrow, SectionTitle, SectionGlow, MailIllustration } from "../components/UI/Shared";
import { COLORS, ACCENTS, FONTS, PROFILE } from "../utilities/constants";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
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

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <a href={`tel:${PROFILE.phone}`} className="contact-row" style={{ "--rc": ACCENTS.amber }}>
                <Phone size={16} /> {PROFILE.phoneDisplay}
              </a>
              <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="contact-row" style={{ "--rc": ACCENTS.teal }}>
                <MessageCircle size={16} /> Message on WhatsApp
              </a>
              <a href={`mailto:${PROFILE.email}`} className="contact-row" style={{ "--rc": ACCENTS.rose }}>
                <Mail size={16} /> {PROFILE.email}
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-row" style={{ "--rc": ACCENTS.amber }}>
                <GitHub size={16} /> github.com/{PROFILE.githubHandle}
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact-row" style={{ "--rc": ACCENTS.teal }}>
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={PROFILE.liveSite} target="_blank" rel="noreferrer" className="contact-row" style={{ "--rc": ACCENTS.violet }}>
                <Globe size={16} /> lalits-portfol.netlify.app
              </a>
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
              <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Send message
              </button>
              {sent && (
                <span style={{ fontFamily: FONTS.mono, fontSize: "12px", color: ACCENTS.teal }}>
                  Opening your email app addressed to {PROFILE.email} — send it from
                  there and the message lands directly in my inbox.
                </span>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;