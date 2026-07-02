import { useState, useEffect, useRef } from "react";
import { COLORS, ACCENTS, FONTS } from "../../utilities/constants";

// Scroll Reveal Hook
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.2,0.8,0.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, color = COLORS.brass }) {
  return (
    <div
      style={{
        fontFamily: FONTS.mono,
        fontSize: "12px",
        letterSpacing: "0.32em",
        color,
        textTransform: "uppercase",
        marginBottom: "18px",
      }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2
      className="gradient-text"
      style={{
        fontFamily: FONTS.display,
        fontSize: "clamp(28px, 4vw, 44px)",
        margin: "0 0 40px 0",
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h2>
  );
}

export function GlowBlobs() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
    </div>
  );
}

export function SectionGlow({ tone = "warm" }) {
  const pairs = {
    warm: [ACCENTS.amber, ACCENTS.rose],
    cool: [ACCENTS.teal, ACCENTS.violet],
    mixed: [ACCENTS.rose, ACCENTS.violet],
  };
  const [a, b] = pairs[tone] || pairs.warm;
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div className="section-blob section-blob-a" style={{ background: a }} />
      <div className="section-blob section-blob-b" style={{ background: b }} />
    </div>
  );
}

export function DevWorkspaceIllustration() {
  return (
    <svg viewBox="0 0 420 320" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="screen-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ACCENTS.amber} stopOpacity="0.9" />
          <stop offset="100%" stopColor={ACCENTS.rose} stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="desk-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={ACCENTS.teal} />
          <stop offset="100%" stopColor={ACCENTS.violet} />
        </linearGradient>
      </defs>
      <circle cx="40" cy="50" r="6" fill={ACCENTS.teal} opacity="0.7" />
      <circle cx="380" cy="40" r="9" fill={ACCENTS.rose} opacity="0.55" />
      <circle cx="60" cy="270" r="5" fill={ACCENTS.violet} opacity="0.6" />
      <circle cx="360" cy="260" r="7" fill={ACCENTS.amber} opacity="0.65" />
      <rect x="30" y="230" width="360" height="10" rx="5" fill="url(#desk-grad)" opacity="0.7" />
      <rect x="120" y="220" width="180" height="12" rx="4" fill={COLORS.panel} stroke={COLORS.border} />
      <rect x="140" y="90" width="140" height="130" rx="10" fill={COLORS.bgSoft} stroke={COLORS.border} strokeWidth="1.5" />
      <rect x="150" y="100" width="120" height="110" rx="5" fill="url(#screen-grad)" opacity="0.14" />
      <rect x="158" y="112" width="60" height="6" rx="3" fill={ACCENTS.amber} opacity="0.9" />
      <rect x="158" y="126" width="90" height="6" rx="3" fill={COLORS.textDim} opacity="0.6" />
      <rect x="158" y="140" width="45" height="6" rx="3" fill={ACCENTS.teal} opacity="0.9" />
      <rect x="158" y="154" width="75" height="6" rx="3" fill={COLORS.textDim} opacity="0.6" />
      <rect x="158" y="168" width="55" height="6" rx="3" fill={ACCENTS.rose} opacity="0.9" />
      <rect x="158" y="182" width="95" height="6" rx="3" fill={COLORS.textDim} opacity="0.45" />
      <text x="196" y="140" fontFamily={FONTS.mono} fontSize="46" fill={ACCENTS.violet} opacity="0.18" textAnchor="middle">
        {"</>"}
      </text>
      <rect x="90" y="205" width="26" height="24" rx="4" fill={COLORS.panel} stroke={ACCENTS.rose} strokeWidth="1.5" />
      <path d="M116 210 q10 0 10 8 t-10 8" fill="none" stroke={ACCENTS.rose} strokeWidth="1.5" />
      <rect x="320" y="195" width="20" height="18" rx="3" fill={COLORS.panel} stroke={ACCENTS.teal} strokeWidth="1.5" />
      <path d="M330 195 C320 175 320 165 330 150 C340 165 340 175 330 195" fill={ACCENTS.teal} opacity="0.55" />
    </svg>
  );
}

export function MailIllustration() {
  return (
    <svg viewBox="0 0 300 220" width="100%" height="100%" style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="env-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ACCENTS.violet} stopOpacity="0.9" />
          <stop offset="100%" stopColor={ACCENTS.teal} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="30" r="5" fill={ACCENTS.amber} opacity="0.7" />
      <circle cx="270" cy="180" r="7" fill={ACCENTS.rose} opacity="0.55" />
      <circle cx="255" cy="35" r="4" fill={ACCENTS.teal} opacity="0.7" />
      <rect x="40" y="60" width="190" height="120" rx="10" fill={COLORS.panel} stroke={COLORS.border} strokeWidth="1.5" />
      <path d="M40 70 L135 145 L230 70" fill="none" stroke="url(#env-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="40" y="60" width="190" height="120" rx="10" fill="url(#env-grad)" opacity="0.08" />
      <g transform="translate(150,20) rotate(18)">
        <path d="M0 0 L46 14 L0 28 L8 14 Z" fill={ACCENTS.amber} opacity="0.9" />
      </g>
    </svg>
  );
}