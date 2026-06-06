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
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
            <span className="font-black text-2xl tracking-tighter text-[#111111]">FaChat</span>
          </button>

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

          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-[#111111] text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#F3EEE5]"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(243,238,229,0.6)", backdropFilter: "blur(4px)" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 md:hidden w-[85vw] max-w-sm bg-[#F3EEE5] border-l-4 border-[#111111] flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 border-b-4 border-[#111111] h-20 flex-shrink-0">
          <span className="font-black text-xl tracking-tighter text-[#111111]">FaChat</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
          {links.map((l, idx) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="flex items-center justify-between w-full text-left py-4 border-b-2 border-[#111111]/15 group"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <span className="font-black uppercase tracking-tight text-[#111111] text-base group-hover:translate-x-1 transition-transform duration-150">
                {l.label}
              </span>
              <span className="text-[#666666] text-lg font-light">→</span>
            </button>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="px-6 pb-10 pt-4 space-y-3 flex-shrink-0 border-t-4 border-[#111111]">
          <a
            href="https://fabproject-panel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block text-center text-sm font-bold text-[#111111] border-2 border-[#111111] py-3 hover:bg-[#ECE4D7] transition-colors"
          >
            Ingresar al panel
          </a>
          <button
            onClick={() => scrollTo("#pricing")}
            className="w-full text-sm font-black uppercase tracking-tight bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] py-3.5 hover:bg-transparent hover:text-[#111111] transition-colors"
          >
            Comenzar gratis →
          </button>
        </div>
      </div>
    </>
  );
}
