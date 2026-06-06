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

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={ref} className="bg-[#F3EEE5] overflow-hidden">
      <div className="section-inner hero-inner">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT — copy */}
          <div>
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", padding: "0.5rem 1.25rem", marginBottom: "1.5rem" }}
              className="inline-block border-2 border-[#111111] bg-[#ECE4D7] text-xs font-black uppercase tracking-widest"
            >
              IA PARA CUALQUIER NEGOCIO
            </div>

            <h1
              data-reveal
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
              className="font-black uppercase tracking-tighter text-[clamp(52px,5.5vw,88px)] leading-[0.9] mb-6 text-[#111111]"
            >
              TU NEGOCIO,<br />ATENDIDO<br />SOLO.
            </h1>

            <p
              data-reveal
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
              className="text-lg text-[#666666] font-medium leading-relaxed max-w-md mb-8"
            >
              Un asistente de WhatsApp con IA que toma turnos, pedidos y consultas por vos — para restaurantes, peluquerías, tiendas, lavaderos y más.
            </p>

            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: Utensils, label: "Restaurantes" },
                { icon: Scissors, label: "Peluquerías" },
                { icon: ShoppingBag, label: "Tiendas" },
                { icon: Car, label: "Lavaderos" },
              ].map(({ icon: Icon, label }) => (
                <div key={label}
                  className="border-2 border-[#111111] bg-white text-xs font-black flex items-center gap-2 text-[#111111]"
                  style={{ padding: "0.5rem 1rem" }}>
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>

            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease", marginTop: "0.75rem" }}
              className="flex items-center gap-6 flex-wrap"
            >
              <button
                onClick={() => scrollTo("#pricing")}
                style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
                className="group flex items-center gap-3 bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] font-black uppercase tracking-tight hover:bg-transparent hover:text-[#111111] transition-colors"
              >
                EMPEZAR GRATIS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs font-semibold text-[#666666] uppercase tracking-wide">
                Sin tarjeta de crédito
              </span>
            </div>
          </div>

          {/* RIGHT — manga chat panel */}
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            className="relative hidden lg:block pr-4 pb-4"
          >
            {/* Outer frame — offset shadow contained within column */}
            <div
              className="border-4 border-[#111111] bg-white relative"
              style={{ boxShadow: "8px 8px 0px 0px #111111" }}
            >
              {/* Window chrome bar */}
              <div className="h-10 bg-[#ECE4D7] border-b-4 border-[#111111] flex items-center px-4 gap-2">
                <div className="w-3.5 h-3.5 bg-[#111111]" />
                <div className="w-3.5 h-3.5 bg-[#111111]" />
                <div className="w-3.5 h-3.5 bg-[#111111]" />
                <span className="ml-2 text-xs font-black uppercase tracking-widest text-[#111111]">
                  ✂ PELUQUERÍA DON MARIO
                </span>
              </div>

              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div className="self-end max-w-[70%] bg-[#F3EEE5] border-2 border-[#111111] text-sm text-[#111111] break-words"
                  style={{ padding: "0.75rem 1.25rem" }}>
                  Hola! Quiero sacar turno para mañana ✂️
                </div>
                <div className="self-start max-w-[70%] bg-white border-2 border-[#111111] text-sm text-[#111111] break-words"
                  style={{ padding: "0.75rem 1.25rem" }}>
                  ¡Hola! Tenemos turnos a las 10:00, 12:30 y 16:00. ¿Cuál preferís?
                </div>
                <div className="self-end max-w-[70%] bg-[#F3EEE5] border-2 border-[#111111] text-sm text-[#111111] break-words"
                  style={{ padding: "0.75rem 1.25rem" }}>
                  A las 10, para corte y barba
                </div>
                <div className="self-start max-w-[75%] border-2 border-[#111111] bg-[#ECE4D7] text-[#111111]"
                  style={{ padding: "0.75rem 1.25rem" }}>
                  <div className="font-black text-xs uppercase border-b-2 border-[#111111]"
                    style={{ paddingBottom: "0.5rem", marginBottom: "0.625rem" }}>
                    TURNO CONFIRMADO ✓
                  </div>
                  <div className="text-xs" style={{ marginBottom: "0.375rem" }}>📅 Mañana · 10:00 hs · Corte + Barba</div>
                  <div className="font-black text-xs">¡TE ESPERAMOS!</div>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div
              className="absolute -top-5 right-6 border-4 border-[#111111] bg-[#F3EEE5] w-12 h-12 flex items-center justify-center z-10"
              style={{ transform: "rotate(12deg)" }}
            >
              <span className="font-black text-2xl leading-none">!</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
