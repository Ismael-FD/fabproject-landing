import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { num: "01", label: "Características", href: "#features" },
    { num: "02", label: "Cómo funciona",   href: "#how"      },
    { num: "03", label: "Precios",         href: "#pricing"  },
    { num: "04", label: "FAQ",             href: "#faq"      },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#F3EEE5] border-b-4 border-[#111111]">
        <div className="section-inner nav-inner flex items-center justify-between h-20">
          <button onClick={() => scrollTo("#hero")}>
            <span className="font-black text-2xl tracking-tighter text-[#111111]">FaChat</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm text-[#666666] font-semibold hover:text-[#111111] transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="text-sm font-bold text-[#111111] hover:text-[#666666] transition-colors">
              Ingresar al panel
            </a>
            <button onClick={() => scrollTo("#pricing")}
              className="text-sm font-black uppercase tracking-tight bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] px-6 py-2.5 hover:bg-transparent hover:text-[#111111] transition-colors">
              Comenzar
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden text-[#111111] p-2 -mr-2"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(17,17,17,0.55)" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "85vw", maxWidth: "340px", background: "#F3EEE5", borderLeft: "4px solid #111111" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between flex-shrink-0"
          style={{ padding: "0 1.5rem", height: "80px", borderBottom: "4px solid #111111", background: "#111111" }}
        >
          <span className="font-black tracking-tighter text-[#F3EEE5]" style={{ fontSize: "1.4rem" }}>
            FaChat
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ color: "#F3EEE5", padding: "0.25rem" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto" style={{ padding: "0.5rem 0" }}>
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="group w-full text-left"
              style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.25rem 1.5rem", borderBottom: "2px solid #ECE4D7" }}
            >
              <span
                className="font-black tabular-nums flex-shrink-0"
                style={{ fontSize: "0.7rem", color: "#BBBBBB", letterSpacing: "0.05em" }}
              >
                {l.num}
              </span>
              <span
                className="font-black uppercase tracking-tight text-[#111111] flex-1 group-hover:translate-x-0.5 transition-transform duration-150"
                style={{ fontSize: "1.15rem" }}
              >
                {l.label}
              </span>
              <span style={{ color: "#BBBBBB", fontSize: "1rem" }}>→</span>
            </button>
          ))}
        </nav>

        {/* CTAs */}
        <div
          className="flex-shrink-0"
          style={{ padding: "1.5rem", borderTop: "4px solid #111111", background: "#ECE4D7", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <a
            href="https://fabproject-panel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center font-bold text-[#111111] hover:opacity-70 transition-opacity"
            style={{ border: "2px solid #111111", padding: "0.9rem 1rem", fontSize: "0.85rem", background: "transparent" }}
          >
            Ingresar al panel
          </a>
          <button
            onClick={() => scrollTo("#pricing")}
            className="w-full font-black uppercase tracking-tight text-[#F3EEE5] hover:opacity-90 transition-opacity"
            style={{ background: "#111111", padding: "1rem", fontSize: "0.9rem", boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.25)" }}
          >
            Comenzar gratis →
          </button>
        </div>
      </div>
    </>
  );
}
