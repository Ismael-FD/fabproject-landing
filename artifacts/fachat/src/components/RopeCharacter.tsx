import { useEffect, useRef, useState } from "react";

export default function RopeCharacter() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [velocity, setVelocity] = useState(0);   // normalised -1..1
  const [phase, setPhase] = useState(0);           // walking cycle
  const [showBubble, setShowBubble] = useState(false);

  const lastScrollY = useRef(window.scrollY);
  const lastTime    = useRef(Date.now());
  const velRef      = useRef(0);
  const phaseRef    = useRef(0);
  const rafRef      = useRef<number>(0);
  const stopTimer   = useRef<ReturnType<typeof setTimeout>>();
  const bubbleTimer = useRef<ReturnType<typeof setTimeout>>();

  // ── animation loop ──────────────────────────────────────────────
  useEffect(() => {
    const loop = () => {
      // decay velocity smoothly
      velRef.current *= 0.88;
      if (Math.abs(velRef.current) > 0.01) {
        setVelocity(velRef.current);
        phaseRef.current += Math.abs(velRef.current) * 0.4;
        setPhase(phaseRef.current);
      } else {
        setVelocity(0);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── scroll tracker ───────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const now   = Date.now();
      const dt    = Math.max(now - lastTime.current, 1);
      const dy    = window.scrollY - lastScrollY.current;
      const raw   = dy / dt;           // px/ms
      velRef.current = Math.max(-1, Math.min(1, raw * 8));

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress  = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);

      lastScrollY.current = window.scrollY;
      lastTime.current    = now;

      // bubble logic
      clearTimeout(bubbleTimer.current);
      setShowBubble(false);
      bubbleTimer.current = setTimeout(() => {
        if (progress < 0.04 || progress > 0.93) setShowBubble(true);
      }, 700);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // show initial bubble
    const t = setTimeout(() => setShowBubble(true), 1400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
      clearTimeout(bubbleTimer.current);
    };
  }, []);

  // ── derived values ───────────────────────────────────────────────
  const atTop    = scrollProgress < 0.04;
  const atBottom = scrollProgress > 0.93;

  // character Y on rope: 8vh → 88vh
  const charY = 8 + scrollProgress * 80;

  // on dark (footer) background → invert colours
  const onDark     = scrollProgress > 0.90;
  const stroke     = onDark ? "#F3EEE5" : "#111111";
  const fill       = onDark ? "#111111" : "#F3EEE5";
  const ropeColor  = onDark ? "#888888" : "#111111";
  const ropeAlt    = onDark ? "#aaaaaa" : "#444444";

  // tilt: rotate around grip (28, 8). down=positive, up=negative
  const tilt = velocity * 22;

  // leg swing: sin-wave while moving
  const swing = velocity !== 0 ? Math.sin(phase) * 10 : 0;

  // eye offset
  const eyeOff = atBottom ? -3.5 : atTop ? 3.5 : 0;

  // grip hand pulse while moving
  const moving = Math.abs(velocity) > 0.05;

  const bubbleText = atBottom ? "¿Subimos?" : "¿Qué hay abajo?";
  const bubbleBg   = onDark ? "#111111" : "#F3EEE5";
  const bubbleBdr  = onDark ? "#F3EEE5" : "#111111";
  const bubbleTxt  = onDark ? "#F3EEE5" : "#111111";

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "80px",
        zIndex: 200,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {/* Rope */}
      <div
        style={{
          position: "absolute",
          left: "30px",
          top: "5vh",
          bottom: "5vh",
          width: "3px",
          background: `repeating-linear-gradient(180deg, ${ropeColor} 0px, ${ropeColor} 6px, ${ropeAlt} 6px, ${ropeAlt} 10px)`,
          borderRadius: "2px",
          transition: "background 0.4s ease",
        }}
      />

      {/* Character */}
      <div
        style={{
          position: "absolute",
          left: "0",
          top: `${charY}vh`,
          width: "80px",
          transform: "translateY(-50%)",
          transition: "top 0.08s linear",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="60"
          height="80"
          viewBox="0 0 60 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: "visible" }}
        >
          {/* Everything rotates around the grip point (30, 6) */}
          <g transform={`rotate(${tilt}, 30, 6)`} style={{ transition: "transform 0.05s ease-out" }}>

            {/* Grip hands */}
            <circle cx="24" cy="8"  r="4" fill={fill} stroke={stroke} strokeWidth="2.5" />
            <circle cx="36" cy="8"  r="4" fill={fill} stroke={stroke} strokeWidth="2.5" />

            {/* Arms up holding rope */}
            <line x1="30" y1="30" x2="24" y2="12" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="30" y1="30" x2="36" y2="12" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Body */}
            <line x1="30" y1="38" x2="30" y2="56" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />

            {/* Legs — swing with walking phase */}
            <line
              x1="30" y1="56"
              x2={22 - swing * 0.5} y2={70 + swing * 0.4}
              stroke={stroke} strokeWidth="2.5" strokeLinecap="round"
            />
            <line
              x1="30" y1="56"
              x2={38 + swing * 0.5} y2={70 - swing * 0.4}
              stroke={stroke} strokeWidth="2.5" strokeLinecap="round"
            />

            {/* Head */}
            <circle cx="30" cy="22" r="13" fill={fill} stroke={stroke} strokeWidth="2.5" />

            {/* Eyes */}
            <circle cx="25" cy={22 + eyeOff} r="2.5" fill={stroke} />
            <circle cx="35" cy={22 + eyeOff} r="2.5" fill={stroke} />

            {/* Mouth */}
            {atBottom ? (
              <path d="M25 28 Q30 25 35 28" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            ) : (
              <path d="M25 27 Q30 32 35 27" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" fill="none" />
            )}

            {/* Motion lines when moving fast */}
            {moving && (
              <>
                <line x1="8"  y1="20" x2="2"  y2="20" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <line x1="8"  y1="28" x2="1"  y2="28" stroke={stroke} strokeWidth="1"   strokeLinecap="round" opacity="0.25" />
                <line x1="8"  y1="36" x2="3"  y2="36" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
              </>
            )}
          </g>
        </svg>

        {/* Speech bubble */}
        {showBubble && (atTop || atBottom) && (
          <div
            style={{
              position: "absolute",
              left: "64px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: bubbleBg,
              border: `2.5px solid ${bubbleBdr}`,
              padding: "0.4rem 0.7rem",
              fontSize: "0.58rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              color: bubbleTxt,
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: `3px 3px 0px 0px ${bubbleBdr}`,
              animation: "bubblePop 0.25s ease-out",
            }}
          >
            {/* Tail */}
            <div style={{
              position: "absolute",
              left: "-8px", top: "50%",
              transform: "translateY(-50%)",
              width: 0, height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderRight: `8px solid ${bubbleBdr}`,
            }} />
            <div style={{
              position: "absolute",
              left: "-4px", top: "50%",
              transform: "translateY(-50%)",
              width: 0, height: 0,
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderRight: `6px solid ${bubbleBg}`,
            }} />
            {bubbleText}
          </div>
        )}
      </div>

      <style>{`
        @keyframes bubblePop {
          0%   { opacity: 0; transform: translateY(-50%) scale(0.6); }
          65%  { transform: translateY(-50%) scale(1.06); }
          100% { opacity: 1; transform: translateY(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
