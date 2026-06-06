import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Características", href: "#features" },
    { label: "Cómo funciona",   href: "#how"      },
    { label: "Precios",         href: "#pricing"  },
    { label: "FAQ",             href: "#faq"      },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#F3EEE5] border-b-4 border-[#111111]">
        <div className="section-inner nav-inner flex items-center justify-between h-20">
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#111111] text-[#F3EEE5] font-black text-sm flex items-center justify-center flex-shrink-0">
              FC
            </div>
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

          <button onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden text-[#111111] p-1">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-[#F3EEE5]/95" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-20 left-0 right-0 bg-[#F3EEE5] border-b-4 border-[#111111] px-8 py-6 space-y-1">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="block w-full text-left text-base text-[#111111] font-semibold hover:text-[#666666] py-3 border-b-2 border-[#111111] transition-colors">
                {l.label}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
                className="block text-center text-sm font-bold text-[#111111] hover:text-[#666666] py-3 transition-colors">
                Ingresar al panel
              </a>
              <button onClick={() => scrollTo("#pricing")}
                className="w-full text-sm font-black uppercase bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] px-5 py-3 hover:bg-transparent hover:text-[#111111] transition-colors">
                Comenzar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
