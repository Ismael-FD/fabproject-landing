import { useEffect, useRef, useState, useCallback } from "react";

const SECTION_IDS  = ["hero", "features", "how", "pricing", "faq"];
const SECTION_MSGS: Record<string, string> = {
  features: "¡Todo esto incluído! 👀",
  how:      "¡En 3 pasos nomás! 🙌",
  pricing:  "Esta es la parte que\nmás me gusta 😍",
  faq:      "Leí esto y quedé\nfascinado 🤩",
};

export default function RopeCharacter() {
  // ── physics refs (mutated in rAF, no re-render) ───────────────────
  const scrollProg  = useRef(0);
  const charY       = useRef(8);
  const charYVel    = useRef(0);
  const rawVel      = useRef(0);
  const smoothVel   = useRef(0);
  const phaseRef    = useRef(0);
  const lastSY      = useRef(window.scrollY);
  const lastST      = useRef(Date.now());
  const rafId       = useRef(0);

  // ── section / bubble tracking refs ───────────────────────────────
  const lastSection    = useRef("");
  const shownSections  = useRef<Set<string>>(new Set());
  const wasAtTop       = useRef(true);
  const wasAtBottom    = useRef(false);
  const bubbleHideTimer = useRef<ReturnType<typeof setTimeout>>();

  // ── rendered state ────────────────────────────────────────────────
  const [disp, setDisp] = useState({
    y: 8, tilt: 0, swing: 0, moving: false, phase: 0,
  });
  const [bubble, setBubble] = useState({ text: "", visible: false });
  const [onDark, setOnDark]   = useState(false);
  const [muted, setMuted]     = useState(false);

  // ── helpers ───────────────────────────────────────────────────────
  const showBubble = useCallback((text: string, autohide = false) => {
    if (muted) return;
    clearTimeout(bubbleHideTimer.current);
    setBubble({ text, visible: true });
    if (autohide) {
      bubbleHideTimer.current = setTimeout(
        () => setBubble(b => ({ ...b, visible: false })),
        3200,
      );
    }
  }, [muted]);

  const hideBubble = useCallback(() => {
    clearTimeout(bubbleHideTimer.current);
    setBubble(b => ({ ...b, visible: false }));
  }, []);

  // ── section detector (called from rAF) ────────────────────────────
  const checkSection = useCallback(() => {
    const prog     = scrollProg.current;
    const atTop    = prog < 0.04;
    const atBottom = prog > 0.93;

    // ── top edge: reset journey & show opening bubble ──
    if (atTop && !wasAtTop.current) {
      wasAtTop.current = true;
      shownSections.current.clear();
      lastSection.current = "";
      wasAtBottom.current = false;
      if (!muted) setBubble({ text: "¿Qué hay abajo? 👇", visible: true });
    }
    if (!atTop) wasAtTop.current = false;

    // ── bottom edge ──
    if (atBottom && !wasAtBottom.current) {
      wasAtBottom.current = true;
      if (!muted) setBubble({ text: "¿Subimos? 🐒", visible: true });
    }
    if (!atBottom) wasAtBottom.current = false;

    // ── dark footer ──
    setOnDark(prog > 0.90);

    // ── section messages (only mid-page) ──
    if (atTop || atBottom) return;

    // find most visible section
    const vh = window.innerHeight;
    let best = ""; let maxViz = 0;
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const r   = el.getBoundingClientRect();
      const viz = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      if (viz > maxViz) { maxViz = viz; best = id; }
    });

    if (best && best !== lastSection.current) {
      lastSection.current = best;
      const msg = SECTION_MSGS[best];
      if (msg && !shownSections.current.has(best)) {
        shownSections.current.add(best);
        if (!muted) {
          clearTimeout(bubbleHideTimer.current);
          setBubble({ text: msg, visible: true });
          bubbleHideTimer.current = setTimeout(
            () => setBubble(b => ({ ...b, visible: false })),
            3500,
          );
        }
      }
    }
  }, [muted]);

  // ── scroll listener ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const now = Date.now();
      const dt  = Math.max(now - lastST.current, 1);
      const dy  = window.scrollY - lastSY.current;
      rawVel.current = dy / dt;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProg.current = max > 0 ? window.scrollY / max : 0;

      lastSY.current = window.scrollY;
      lastST.current = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── animation loop ────────────────────────────────────────────────
  useEffect(() => {
    const loop = () => {
      // smooth velocity
      smoothVel.current += (rawVel.current - smoothVel.current) * 0.15;
      rawVel.current    *= 0.80;

      // spring position
      const targetY = 8 + scrollProg.current * 80;
      const spring  = (targetY - charY.current) * 0.11;
      charYVel.current = charYVel.current * 0.78 + spring;
      charY.current   += charYVel.current;

      // walking phase
      const spd = Math.abs(smoothVel.current);
      if (spd > 0.005) {
        phaseRef.current += spd * 3.2;
      } else {
        const nearest = Math.round(phaseRef.current / Math.PI) * Math.PI;
        phaseRef.current += (nearest - phaseRef.current) * 0.07;
      }

      const moving = spd > 0.012;
      const tilt   = Math.max(-26, Math.min(26, smoothVel.current * 240));
      const swing  = Math.sin(phaseRef.current) * (moving ? 11 : 0);

      setDisp({ y: charY.current, tilt, swing, moving, phase: phaseRef.current });
      checkSection();
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    // initial bubble
    const t = setTimeout(() => {
      if (!muted) setBubble({ text: "¿Qué hay abajo? 👇", visible: true });
    }, 1200);
    return () => {
      cancelAnimationFrame(rafId.current);
      clearTimeout(t);
      clearTimeout(bubbleHideTimer.current);
    };
  }, [checkSection, muted]);

  // ── derived SVG values ────────────────────────────────────────────
  const { y, tilt, swing, moving, phase } = disp;

  const gripCycle  = Math.floor(phase / Math.PI) % 2;
  const leftGrip   = moving ? (gripCycle === 0 ? 1 : 0.50) : 1;
  const rightGrip  = moving ? (gripCycle === 1 ? 1 : 0.50) : 1;
  const leftR      = moving ? (gripCycle === 0 ? 5.5 : 3.2) : 4.2;
  const rightR     = moving ? (gripCycle === 1 ? 5.5 : 3.2) : 4.2;

  // colour scheme
  const stroke   = onDark ? "#F3EEE5" : "#111111";
  const fill     = onDark ? "#222222" : "#F3EEE5";
  const ropeClr  = onDark ? "#888888" : "#111111";
  const ropeAlt  = onDark ? "#aaaaaa" : "#444444";
  const bbBg     = onDark ? "#1a1a1a" : "#F3EEE5";
  const bbBdr    = onDark ? "#F3EEE5" : "#111111";
  const bbTxt    = onDark ? "#F3EEE5" : "#111111";

  // head click area (px offset from top of the character div)
  // SVG 62×84, head cy=24, r=13 → top=11, bottom=37, center y≈24
  // character div translateY(-50%), so head sits ≈ at y offset 11…37
  const headClickStyle: React.CSSProperties = {
    position: "absolute",
    left: "4px", top: "0px",
    width: "54px", height: "38px",
    borderRadius: "50%",
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 1,
    background: "transparent",
  };

  return (
    <div
      style={{
        position: "fixed", left: 0, top: 0,
        height: "100vh", width: "82px",
        zIndex: 200, pointerEvents: "none", userSelect: "none",
      }}
    >
      {/* Rope */}
      <div style={{
        position: "absolute", left: "31px",
        top: "5vh", bottom: "5vh", width: "3px",
        background: `repeating-linear-gradient(180deg,${ropeClr} 0,${ropeClr} 6px,${ropeAlt} 6px,${ropeAlt} 10px)`,
        borderRadius: "2px",
        transition: "background 0.4s ease",
      }} />

      {/* Character */}
      <div
        style={{
          position: "absolute", left: 0,
          top: `${y}vh`, width: "82px",
          transform: "translateY(-50%)",
        }}
      >
        {/* Invisible head click target */}
        <div
          style={headClickStyle}
          title={muted ? "Destapar boca" : "Callar"}
          onClick={() => {
            setMuted(m => {
              if (!m) setBubble(b => ({ ...b, visible: false }));
              return !m;
            });
          }}
        />

        <svg width="62" height="84" viewBox="0 0 62 84" fill="none"
          xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>

          <g transform={`rotate(${tilt}, 31, 6)`}>

            {/* Hands */}
            <circle cx="25" cy="9" r={leftR}
              fill={fill} stroke={stroke} strokeWidth="2.5" opacity={leftGrip} />
            <circle cx="37" cy="9" r={rightR}
              fill={fill} stroke={stroke} strokeWidth="2.5" opacity={rightGrip} />

            {/* Knuckles on gripping hand */}
            {moving && gripCycle === 0 && (<>
              <line x1="22" y1="7" x2="22" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              <line x1="25" y1="5" x2="25" y2="9"  stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              <line x1="28" y1="7" x2="28" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            </>)}
            {moving && gripCycle === 1 && (<>
              <line x1="34" y1="7" x2="34" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              <line x1="37" y1="5" x2="37" y2="9"  stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              <line x1="40" y1="7" x2="40" y2="11" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            </>)}

            {/* Arms */}
            <line x1="31" y1="32" x2="25" y2="13" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="31" y1="32" x2="37" y2="13" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Body */}
            <line x1="31" y1="40" x2="31" y2="58" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Legs */}
            <line x1="31" y1="58" x2={23 - swing * 0.6} y2={72 + swing * 0.3}
              stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="31" y1="58" x2={39 + swing * 0.6} y2={72 - swing * 0.3}
              stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Head */}
            <circle cx="31" cy="24" r="13" fill={fill} stroke={stroke} strokeWidth="2.5" />

            {/* Eyes */}
            {(() => {
              const eyeOff = scrollProg.current > 0.93 ? -4
                           : scrollProg.current < 0.04 ?  4 : 0;
              return (<>
                <circle cx="26" cy={24 + eyeOff} r="2.5" fill={stroke} />
                <circle cx="36" cy={24 + eyeOff} r="2.5" fill={stroke} />
                <circle cx="25" cy={23 + eyeOff} r="0.8" fill={fill} opacity="0.6" />
                <circle cx="35" cy={23 + eyeOff} r="0.8" fill={fill} opacity="0.6" />
              </>);
            })()}

            {/* Mouth — zipper when muted, smile/frown otherwise */}
            {muted ? (
              <>
                {/* Zipper line */}
                <path d="M24 29 L38 29" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
                {/* Zipper teeth */}
                <line x1="26" y1="27" x2="26" y2="31" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
                <line x1="29" y1="27" x2="29" y2="31" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
                <line x1="32" y1="27" x2="32" y2="31" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
                <line x1="35" y1="27" x2="35" y2="31" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
              </>
            ) : scrollProg.current > 0.93 ? (
              <path d="M26 30 Q31 26 36 30" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M26 29 Q31 34 36 29" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            )}

            {/* Motion streaks */}
            {moving && (
              <g opacity="0.33">
                <line x1="6"  y1="22" x2="0"  y2="22" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6"  y1="30" x2="-1" y2="30" stroke={stroke} strokeWidth="1"   strokeLinecap="round" />
                <line x1="6"  y1="38" x2="1"  y2="38" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
              </g>
            )}
          </g>
        </svg>

        {/* Speech bubble */}
        {bubble.visible && !muted && (
          <div
            key={bubble.text}
            style={{
              position: "absolute",
              left: "66px",
              top: "30%",
              transform: "translateY(-50%)",
              backgroundColor: bbBg,
              border: `2.5px solid ${bbBdr}`,
              padding: "0.45rem 0.75rem",
              fontSize: "0.58rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              color: bbTxt,
              whiteSpace: "pre-line",    // wrap on \n
              maxWidth: "140px",
              lineHeight: 1.4,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: `3px 3px 0px 0px ${bbBdr}`,
              animation: "bubblePop 0.28s cubic-bezier(0.34,1.56,0.64,1)",
            } as React.CSSProperties}
          >
            {/* Tail */}
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

        {/* Mute indicator tooltip */}
        {muted && (
          <div style={{
            position: "absolute",
            left: "66px", top: "30%",
            transform: "translateY(-50%)",
            backgroundColor: bbBg,
            border: `2.5px solid ${bbBdr}`,
            padding: "0.35rem 0.6rem",
            fontSize: "0.55rem",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            color: bbTxt,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            boxShadow: `3px 3px 0px 0px ${bbBdr}`,
            opacity: 0.6,
            pointerEvents: "none",
          } as React.CSSProperties}>
            🤐 callado
          </div>
        )}
      </div>

      <style>{`
        @keyframes bubblePop {
          0%   { opacity: 0; transform: translateY(-50%) scale(0.55); }
          100% { opacity: 1; transform: translateY(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
