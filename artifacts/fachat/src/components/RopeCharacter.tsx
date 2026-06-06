import { useEffect, useRef, useState, useCallback } from "react";

// Messages per section
const SECTION_MSGS: Record<string, string> = {
  features:  "¡Todo esto incluído! 👀",
  how:       "¡En 3 pasos nomás! 🙌",
  pricing:   "Esta parte es la que más me gusta 😍",
  faq:       "Leí esto y quedé fascinado 🤩",
};

const SECTION_IDS = ["hero", "features", "how", "pricing", "faq"];

export default function RopeCharacter() {
  // ── physics state (all in refs for rAF loop, then flushed to state) ──
  const scrollProg    = useRef(0);
  const charY         = useRef(8);          // 8vh → 88vh
  const charYVel      = useRef(0);          // spring velocity
  const rawVel        = useRef(0);          // instantaneous scroll velocity
  const smoothVel     = useRef(0);          // low-pass-filtered velocity
  const phase         = useRef(0);          // walking/grip cycle
  const lastScrollY   = useRef(window.scrollY);
  const lastScrollT   = useRef(Date.now());
  const rafId         = useRef(0);

  // rendered state (updated from rAF)
  const [display, setDisplay] = useState({
    y: 8, tilt: 0, swing: 0, moving: false, phase: 0,
  });

  // bubble state
  const [bubble, setBubble] = useState<{ text: string; visible: boolean }>({ text: "", visible: false });
  const [prevSection, setPrevSection] = useState<string | null>(null);
  const [onDark, setOnDark] = useState(false);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout>>();

  // ── scroll listener ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const now     = Date.now();
      const dt      = Math.max(now - lastScrollT.current, 1);
      const dy      = window.scrollY - lastScrollY.current;
      rawVel.current = dy / dt;            // px/ms  (positive = down)

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProg.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      lastScrollY.current = window.scrollY;
      lastScrollT.current = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── section detection for contextual messages ─────────────────────
  const checkSection = useCallback(() => {
    const vh = window.innerHeight;
    let best = "";
    let maxViz = 0;
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const r   = el.getBoundingClientRect();
      const viz = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      if (viz > maxViz) { maxViz = viz; best = id; }
    });

    const atTop    = scrollProg.current < 0.04;
    const atBottom = scrollProg.current > 0.93;

    if ((atTop || atBottom) && best !== prevSection) {
      const msg = atBottom ? "¿Subimos? 🐒" : "¿Qué hay abajo? 👇";
      setBubble({ text: msg, visible: true });
      setPrevSection(best);
    } else if (!atTop && !atBottom && best !== prevSection && SECTION_MSGS[best]) {
      setBubble({ text: SECTION_MSGS[best], visible: true });
      setPrevSection(best);
      clearTimeout(bubbleTimer.current);
      bubbleTimer.current = setTimeout(() => setBubble(b => ({ ...b, visible: false })), 3500);
    } else if (atTop || atBottom) {
      // keep bubble visible at edges
    } else if (!SECTION_MSGS[best] && !atTop && !atBottom) {
      setBubble(b => ({ ...b, visible: false }));
    }

    setOnDark(scrollProg.current > 0.90);
  }, [prevSection]);

  // ── main animation loop ───────────────────────────────────────────
  useEffect(() => {
    const loop = () => {
      // low-pass filter velocity (exponential moving average)
      smoothVel.current += (rawVel.current - smoothVel.current) * 0.18;
      // decay raw vel
      rawVel.current *= 0.82;

      // spring: character Y follows scroll target with spring physics
      const targetY = 8 + scrollProg.current * 80;
      const spring  = (targetY - charY.current) * 0.12;
      charYVel.current = charYVel.current * 0.75 + spring;
      charY.current   += charYVel.current;

      // walk phase — driven by abs velocity
      const spd = Math.abs(smoothVel.current);
      if (spd > 0.005) {
        phase.current += spd * 3.5;
      } else {
        // slow phase back to neutral (nearest multiple of PI)
        const nearest = Math.round(phase.current / Math.PI) * Math.PI;
        phase.current += (nearest - phase.current) * 0.08;
      }

      const moving = spd > 0.015;
      const tilt   = Math.max(-28, Math.min(28, smoothVel.current * 260));
      const swing  = Math.sin(phase.current) * (moving ? 12 : 0);

      setDisplay({ y: charY.current, tilt, swing, moving, phase: phase.current });

      checkSection();
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    // initial bubble after 1.4s
    bubbleTimer.current = setTimeout(() =>
      setBubble({ text: "¿Qué hay abajo? 👇", visible: true }), 1400);
    return () => {
      cancelAnimationFrame(rafId.current);
      clearTimeout(bubbleTimer.current);
    };
  }, [checkSection]);

  // ── derived SVG values ────────────────────────────────────────────
  const { y, tilt, swing, moving, phase: ph } = display;

  // hand grip: alternates which hand is "tight" vs "releasing"
  const gripCycle    = Math.floor(ph / Math.PI) % 2;   // 0 or 1
  const leftGrip     = moving ? (gripCycle === 0 ? 1 : 0.55) : 1;
  const rightGrip    = moving ? (gripCycle === 1 ? 1 : 0.55) : 1;
  const leftR        = moving ? (gripCycle === 0 ? 5 : 3.5) : 4;
  const rightR       = moving ? (gripCycle === 1 ? 5 : 3.5) : 4;

  // ── colour scheme ─────────────────────────────────────────────────
  const stroke    = onDark ? "#F3EEE5" : "#111111";
  const fill      = onDark ? "#222222" : "#F3EEE5";
  const ropeClr   = onDark ? "#888888" : "#111111";
  const ropeAlt   = onDark ? "#aaaaaa" : "#444444";
  const bbBg      = onDark ? "#1a1a1a" : "#F3EEE5";
  const bbBdr     = onDark ? "#F3EEE5" : "#111111";
  const bbTxt     = onDark ? "#F3EEE5" : "#111111";

  return (
    <div
      style={{
        position: "fixed", left: 0, top: 0,
        height: "100vh", width: "82px",
        zIndex: 200, pointerEvents: "none", userSelect: "none",
      }}
    >
      {/* Rope */}
      <div
        style={{
          position: "absolute", left: "31px",
          top: "5vh", bottom: "5vh",
          width: "3px",
          background: `repeating-linear-gradient(180deg,${ropeClr} 0,${ropeClr} 6px,${ropeAlt} 6px,${ropeAlt} 10px)`,
          borderRadius: "2px",
          transition: "background 0.4s ease",
        }}
      />

      {/* Character */}
      <div
        style={{
          position: "absolute", left: 0,
          top: `${y}vh`,
          width: "82px",
          transform: "translateY(-50%)",
          // NO CSS transition on top — handled by rAF spring
        }}
      >
        <svg width="62" height="84" viewBox="0 0 62 84" fill="none"
          xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>

          {/* Rotate entire body around grip midpoint (31, 6) */}
          <g transform={`rotate(${tilt}, 31, 6)`}>

            {/* ── Hands / grip circles ── */}
            {/* Left hand */}
            <circle cx="25" cy="9" r={leftR}
              fill={fill} stroke={stroke} strokeWidth="2.5"
              opacity={leftGrip}
              style={{ transition: "r 0.1s ease, opacity 0.1s ease" }}
            />
            {/* Right hand */}
            <circle cx="37" cy="9" r={rightR}
              fill={fill} stroke={stroke} strokeWidth="2.5"
              opacity={rightGrip}
              style={{ transition: "r 0.1s ease, opacity 0.1s ease" }}
            />

            {/* Knuckle marks on gripping hand */}
            {moving && gripCycle === 0 && (
              <>
                <line x1="22" y1="7" x2="22" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <line x1="25" y1="5" x2="25" y2="9"  stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <line x1="28" y1="7" x2="28" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </>
            )}
            {moving && gripCycle === 1 && (
              <>
                <line x1="34" y1="7" x2="34" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <line x1="37" y1="5" x2="37" y2="9"  stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                <line x1="40" y1="7" x2="40" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </>
            )}

            {/* Arms */}
            <line x1="31" y1="32" x2="25" y2="13" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="31" y1="32" x2="37" y2="13" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Body */}
            <line x1="31" y1="40" x2="31" y2="58" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Legs — swing in opposite phase */}
            <line
              x1="31" y1="58"
              x2={23 - swing * 0.6} y2={72 + swing * 0.3}
              stroke={stroke} strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1="31" y1="58"
              x2={39 + swing * 0.6} y2={72 - swing * 0.3}
              stroke={stroke} strokeWidth="2.5" strokeLinecap="round"
            />

            {/* Head */}
            <circle cx="31" cy="24" r="13" fill={fill} stroke={stroke} strokeWidth="2.5" />

            {/* Eyes */}
            {(() => {
              const atTop    = scrollProg.current < 0.04;
              const atBottom = scrollProg.current > 0.93;
              const eyeOff   = atBottom ? -4 : atTop ? 4 : 0;
              return (
                <>
                  <circle cx="26" cy={24 + eyeOff} r="2.5" fill={stroke} />
                  <circle cx="36" cy={24 + eyeOff} r="2.5" fill={stroke} />
                  {/* pupils highlight */}
                  <circle cx="25" cy={23 + eyeOff} r="0.8" fill={fill} opacity="0.6" />
                  <circle cx="35" cy={23 + eyeOff} r="0.8" fill={fill} opacity="0.6" />
                </>
              );
            })()}

            {/* Mouth */}
            {scrollProg.current > 0.93 ? (
              <path d="M26 30 Q31 26 36 30" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M26 29 Q31 34 36 29" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            )}

            {/* Motion streak lines */}
            {moving && (
              <g opacity="0.35">
                <line x1="6"  y1="22" x2="0"  y2="22" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6"  y1="30" x2="-1" y2="30" stroke={stroke} strokeWidth="1"   strokeLinecap="round" />
                <line x1="6"  y1="38" x2="1"  y2="38" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </g>
        </svg>

        {/* Speech bubble */}
        {bubble.visible && (
          <div
            key={bubble.text}
            style={{
              position: "absolute",
              left: "66px",
              top: "38%",
              transform: "translateY(-50%)",
              backgroundColor: bbBg,
              border: `2.5px solid ${bbBdr}`,
              padding: "0.45rem 0.75rem",
              fontSize: "0.58rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              color: bbTxt,
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: `3px 3px 0px 0px ${bbBdr}`,
              animation: "bubblePop 0.28s cubic-bezier(0.34,1.56,0.64,1)",
              maxWidth: "160px",
              whiteSpaceCollapse: "preserve",
            } as React.CSSProperties}
          >
            <div style={{
              position: "absolute", left: "-8px", top: "50%",
              transform: "translateY(-50%)",
              width: 0, height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderRight: `8px solid ${bbBdr}`,
            }} />
            <div style={{
              position: "absolute", left: "-4px", top: "50%",
              transform: "translateY(-50%)",
              width: 0, height: 0,
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderRight: `6px solid ${bbBg}`,
            }} />
            {bubble.text}
          </div>
        )}
      </div>

      <style>{`
        @keyframes bubblePop {
          0%   { opacity: 0; transform: translateY(-50%) scale(0.5); }
          100% { opacity: 1; transform: translateY(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
