import { useEffect, useState } from "react";

export default function RopeCharacter() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let bubbleTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);

      clearTimeout(bubbleTimer);
      setShowBubble(false);
      bubbleTimer = setTimeout(() => {
        if (progress < 0.04 || progress > 0.93) setShowBubble(true);
      }, 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // show bubble on initial load after a delay
    const initTimer = setTimeout(() => setShowBubble(true), 1200);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bubbleTimer);
      clearTimeout(initTimer);
    };
  }, []);

  const atTop = scrollProgress < 0.04;
  const atBottom = scrollProgress > 0.93;

  // character Y position: travels from 8vh to 88vh
  const charY = 8 + scrollProgress * 80;

  // eye Y offset: up (-3), center (0), down (+3)
  const eyeOffset = atBottom ? -3 : atTop ? 3 : 0;

  const bubbleText = atBottom ? "¿Subimos?" : "¿Qué hay abajo?";

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "72px",
        zIndex: 200,
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {/* Rope */}
      <div
        style={{
          position: "absolute",
          left: "28px",
          top: "5vh",
          bottom: "5vh",
          width: "3px",
          background: "repeating-linear-gradient(180deg, #111111 0px, #111111 6px, #444444 6px, #444444 10px)",
          borderRadius: "2px",
        }}
      />

      {/* Character */}
      <div
        style={{
          position: "absolute",
          left: "0",
          top: `${charY}vh`,
          width: "72px",
          transform: "translateY(-50%)",
          transition: "top 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* SVG person */}
        <svg width="56" height="72" viewBox="0 0 56 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rope grip hands */}
          <circle cx="28" cy="8" r="4" fill="#F3EEE5" stroke="#111111" strokeWidth="2.5" />

          {/* Arms up holding rope */}
          <line x1="28" y1="28" x2="18" y2="14" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="28" x2="38" y2="14" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />

          {/* Body */}
          <line x1="28" y1="36" x2="28" y2="54" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />

          {/* Legs */}
          <line x1="28" y1="54" x2="20" y2="68" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="54" x2="36" y2="68" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />

          {/* Head */}
          <circle cx="28" cy="28" r="12" fill="#F3EEE5" stroke="#111111" strokeWidth="2.5" />

          {/* Eyes — animated offset */}
          <circle cx="23" cy={28 + eyeOffset} r="2.5" fill="#111111">
            <animate
              attributeName="cy"
              values={`${28 + eyeOffset}`}
              dur="0.3s"
              fill="freeze"
            />
          </circle>
          <circle cx="33" cy={28 + eyeOffset} r="2.5" fill="#111111" />

          {/* Mouth — smile at top, neutral in middle, slight frown at bottom asking to go up */}
          {atBottom ? (
            <path d="M23 34 Q28 31 33 34" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          ) : (
            <path d="M23 33 Q28 37 33 33" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          )}
        </svg>

        {/* Speech bubble */}
        {showBubble && (atTop || atBottom) && (
          <div
            style={{
              position: "absolute",
              left: "58px",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#F3EEE5",
              border: "2.5px solid #111111",
              padding: "0.35rem 0.65rem",
              fontSize: "0.6rem",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              color: "#111111",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              boxShadow: "3px 3px 0px 0px #111111",
              animation: "bubblePop 0.25s ease-out",
            }}
          >
            {/* Tail */}
            <div style={{
              position: "absolute",
              left: "-7px",
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderRight: "7px solid #111111",
            }} />
            <div style={{
              position: "absolute",
              left: "-4px",
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderRight: "6px solid #F3EEE5",
            }} />
            {bubbleText}
          </div>
        )}
      </div>

      <style>{`
        @keyframes bubblePop {
          0%   { opacity: 0; transform: translateY(-50%) scale(0.7); }
          60%  { transform: translateY(-50%) scale(1.05); }
          100% { opacity: 1; transform: translateY(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
