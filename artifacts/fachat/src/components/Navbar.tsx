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
    { label: "Características", href: "#features" },
    { label: "Cómo funciona",   href: "#how"      },
    { label: "Precios",         href: "#pricing"  },
    { label: "FAQ",             href: "#faq"      },
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

          {/* Hamburger — simple, sin encuadre */}
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
        style={{ backgroundColor: "rgba(17,17,17,0.35)" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden w-[80vw] max-w-xs bg-[#F3EEE5] border-l-4 border-[#111111] flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between px-6 border-b-4 border-[#111111] h-20 flex-shrink-0">
          <span className="font-black text-xl tracking-tighter text-[#111111]">Menú</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-[#111111] p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-6 py-6 flex flex-col overflow-y-auto">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="flex items-center justify-between w-full text-left py-5 border-b-2 border-[#111111]/10 group"
            >
              <span className="font-black uppercase tracking-tight text-[#111111] text-base group-hover:translate-x-1 transition-transform duration-150">
                {l.label}
              </span>
              <span className="text-[#999999] text-sm">→</span>
            </button>
          ))}
        </nav>

        {/* CTAs */}
        <div className="px-6 pb-10 pt-5 space-y-3 flex-shrink-0 border-t-4 border-[#111111]">
          <a
            href="https://fabproject-panel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center text-sm font-bold text-[#111111] py-3.5 border-2 border-[#111111] hover:bg-[#ECE4D7] transition-colors"
          >
            Ingresar al panel
          </a>
          <button
            onClick={() => scrollTo("#pricing")}
            className="w-full text-sm font-black uppercase tracking-tight bg-[#111111] text-[#F3EEE5] py-4 hover:opacity-80 transition-opacity"
          >
            Comenzar gratis →
          </button>
        </div>
      </div>
    </>
  );
}
