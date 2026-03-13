"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Características", href: "#features"  },
    { label: "Cómo funciona",   href: "#how"        },
    { label: "Precios",         href: "#pricing"    },
    { label: "FAQ",             href: "#faq"        },
  ];

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060a07]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">FaChat</span>
          </button>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors px-3 py-2">
              Ingresar al panel
            </a>
            <button onClick={() => scrollTo("#pricing")}
              className="text-sm font-semibold bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/30 hover:-translate-y-0.5">
              Agendar demo
            </button>
          </div>

          {/* Hamburger mobile */}
          <button onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-[#060a07]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 bg-[#0c110e] border-b border-white/5 px-6 py-6 space-y-1 transition-all duration-300 ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}>
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-base text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors">
              {l.label}
            </button>
          ))}
          <div className="pt-4 space-y-3">
            <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="block text-center text-sm text-gray-400 hover:text-white py-3 transition-colors">
              Ingresar al panel
            </a>
            <button onClick={() => scrollTo("#pricing")}
              className="w-full text-sm font-semibold bg-brand-500 text-white px-5 py-3 rounded-xl">
              Agendar demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
