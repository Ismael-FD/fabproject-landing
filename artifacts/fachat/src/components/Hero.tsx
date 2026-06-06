import { useEffect, useRef } from "react";
import { ArrowRight, Utensils, Scissors, ShoppingBag, Car } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-reveal]");
    els?.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, i * 120);
    });
  }, []);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={ref} className="bg-[#F3EEE5] pt-16 pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-16 items-center">

        {/* LEFT COLUMN */}
        <div>
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            className="inline-block border border-[#111111] bg-[#ECE4D7] px-3 py-1 text-xs font-black uppercase tracking-widest mb-8"
          >
            IA PARA CUALQUIER NEGOCIO
          </div>

          <h1
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            className="font-black uppercase tracking-tighter text-[clamp(56px,8vw,96px)] leading-[0.9] mb-8 flex flex-col text-[#111111]"
          >
            <span>TU NEGOCIO,</span>
            <span>ATENDIDO</span>
            <span>SOLO.</span>
          </h1>

          <p
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            className="text-xl text-[#666666] font-medium leading-relaxed max-w-lg mb-10"
          >
            Un asistente de WhatsApp con IA que toma turnos, pedidos y consultas por vos — para restaurantes, peluquerías, tiendas, lavaderos y más.
          </p>

          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {[
              { icon: Utensils, label: "Restaurantes" },
              { icon: Scissors, label: "Peluquerías" },
              { icon: ShoppingBag, label: "Tiendas" },
              { icon: Car, label: "Lavaderos" },
            ].map(({ icon: Icon, label }) => (
              <div key={label}
                className="border-2 border-[#111111] bg-white px-3 py-1.5 text-sm font-black flex items-center gap-2 text-[#111111]">
                <Icon className="w-4 h-4" />
                {label}
              </div>
            ))}
          </div>

          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            className="flex items-center gap-6 flex-wrap"
          >
            <button
              onClick={() => scrollTo("#pricing")}
              className="group flex items-center gap-2 bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] px-8 py-4 font-black uppercase tracking-tight text-base hover:bg-transparent hover:text-[#111111] transition-colors"
            >
              EMPEZAR GRATIS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-sm font-semibold text-[#666666] uppercase">
              * Sin tarjeta de crédito
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN — Manga chat panel */}
        <div
          data-reveal
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease" }}
          className="relative animate-float"
        >
          <div
            className="border-4 border-[#111111] bg-white p-6 pt-14 relative"
            style={{ boxShadow: "16px 16px 0px 0px #111111" }}
          >
            {/* Window bar */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#ECE4D7] border-b-4 border-[#111111] flex items-center px-4 gap-2">
              <div className="w-4 h-4 bg-[#111111]" />
              <div className="w-4 h-4 bg-[#111111]" />
              <div className="w-4 h-4 bg-[#111111]" />
            </div>

            <div className="font-black text-xs uppercase tracking-widest mb-5 text-[#111111]">
              ✂ PELUQUERÍA DON MARIO
            </div>

            <div className="flex flex-col gap-4">
              <div className="self-end max-w-[78%] bg-[#F3EEE5] border-2 border-[#111111] p-3 text-sm relative text-[#111111]">
                Hola! Quiero sacar turno para mañana ✂️
              </div>
              <div className="self-start max-w-[78%] bg-white border-2 border-[#111111] p-3 text-sm relative text-[#111111]">
                ¡Hola! Tenemos turnos a las 10:00, 12:30 y 16:00. ¿Cuál preferís?
              </div>
              <div className="self-end max-w-[78%] bg-[#F3EEE5] border-2 border-[#111111] p-3 text-sm relative text-[#111111]">
                A las 10, para corte y barba
              </div>
              <div className="self-start max-w-[85%] border-2 border-[#111111] bg-white p-3 text-[#111111]">
                <div className="font-black text-xs uppercase border-b-2 border-[#111111] pb-1 mb-2">
                  TURNO CONFIRMADO ✓
                </div>
                <div className="text-xs mb-2">📅 Mañana · 10:00 hs · Corte + Barba</div>
                <div className="font-black text-xs">¡TE ESPERAMOS!</div>
              </div>
            </div>
          </div>

          {/* Decorative "!" badge */}
          <div
            className="absolute -right-6 -top-6 border-4 border-[#111111] bg-[#F3EEE5] p-2 z-10"
            style={{ transform: "rotate(12deg)" }}
          >
            <span className="font-black text-2xl">!</span>
          </div>
        </div>

      </div>
    </section>
  );
}
