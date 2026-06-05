import { useEffect, useRef } from "react";
import { ArrowRight, Star } from "lucide-react";

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
    <section id="hero" ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[600px] rounded-full
                        bg-blue-500/10 blur-[140px] animate-glow-pulse" />
        <div className="absolute top-1/4 right-1/4
                        w-[300px] h-[300px] rounded-full
                        bg-blue-400/5 blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="absolute bottom-0 left-0 right-0 h-48
                        bg-gradient-to-t from-[#060810] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">

        <div data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20
                     text-blue-400 text-xs font-semibold tracking-widest uppercase
                     px-4 py-2 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Asistente virtual para tu negocio
        </div>

        <h1 data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                     text-white leading-[1.05] tracking-tight">
          Tu negocio,<br />
          <span className="gradient-text italic">siempre activo.</span>
        </h1>

        <p data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
          FaChat atiende a tus clientes por WhatsApp las&nbsp;24&nbsp;hs, toma pedidos,
          responde consultas y te avisa en tiempo real — mientras vos te enfocás en lo que importa.
        </p>

        <div data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollTo("#pricing")}
            className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-400
                       text-white font-semibold text-base px-8 py-4 rounded-2xl
                       shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                       transition-all duration-300 hover:-translate-y-1 glow-blue">
            Quiero una demo gratuita
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => scrollTo("#how")}
            className="text-gray-400 hover:text-white text-base px-6 py-4
                       rounded-2xl border border-white/10 hover:border-white/20
                       transition-all duration-300 hover:bg-white/5">
            Ver cómo funciona
          </button>
        </div>

        <div data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span>+30 negocios en Argentina</span>
          <span className="hidden sm:block">·</span>
          <span className="hidden sm:block">Sin tarjeta de crédito</span>
        </div>
      </div>

      <div data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s ease" }}
        className="relative z-10 mt-16 w-full max-w-lg mx-auto animate-float">
        <div className="relative bg-[#111827] border border-white/[0.08] rounded-3xl p-1
                        shadow-2xl shadow-black/60">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              FC
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none">Barbería El Estilo</p>
              <p className="text-blue-400 text-xs mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                En línea
              </p>
            </div>
          </div>
          <div className="px-4 py-4 space-y-3">
            {[
              { from: "user", text: "Hola! ¿tienen turnos para hoy? ✂️" },
              { from: "bot",  text: "¡Hola! Sí, tenemos disponibles a las 16:00 y 18:30 hs. ¿Te anoto en alguno?" },
              { from: "user", text: "Sí, el de las 16 para corte y barba" },
              { from: "bot",  text: "Perfecto! Te agendo:\n• Corte + Barba — $8.500\nHoy a las 16:00 hs ✅\n¿Confirmás el turno?" },
            ].map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  m.from === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-[#1a2235] text-gray-200 rounded-bl-sm border border-white/5"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div className="flex justify-start">
              <div className="bg-[#1a2235] border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                {[0, 0.2, 0.4].map((d, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: `${d}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
                        w-3/4 h-12 bg-blue-500/20 blur-2xl rounded-full" />
      </div>
    </section>
  );
}
