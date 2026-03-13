"use client";

import { useEffect, useRef } from "react";
import { PhoneCall, Settings, Zap, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: PhoneCall,
    title: "Agendás una demo",
    desc: "Hablamos 20 minutos. Te mostramos el sistema funcionando con un negocio real y respondemos todas tus dudas.",
  },
  {
    icon: Settings,
    title: "Configuramos todo",
    desc: "Cargamos tu catálogo, horarios, servicios y personalizamos el tono del asistente. Vos no tocás nada técnico.",
  },
  {
    icon: Zap,
    title: "Activamos en minutos",
    desc: "Conectamos tu número de WhatsApp. En menos de 10 minutos tu asistente ya está activo atendiendo clientes.",
  },
  {
    icon: TrendingUp,
    title: "Crecés sin fricción",
    desc: "Desde tu panel ves las consultas y pedidos en tiempo real, editás tu catálogo y monitoreás las métricas.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0f1a] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[500px] h-[300px] rounded-full bg-brand-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-20 space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase
                           text-brand-400 bg-brand-500/10 border border-brand-500/20
                           px-4 py-1.5 rounded-full">
            Cómo funciona
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            De cero a activo<br />
            <span className="gradient-text italic">en el mismo día</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px
                          bg-gradient-to-r from-transparent via-brand-500/30 to-transparent
                          pointer-events-none" />
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i}
                className={`reveal delay-${(i + 1) * 100} relative flex flex-col items-center text-center`}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#111827] border border-brand-500/20
                                  flex items-center justify-center relative z-10
                                  shadow-lg shadow-brand-500/10">
                    <Icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full
                                   bg-brand-500 text-white text-[10px] font-bold
                                   flex items-center justify-center z-20">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="reveal text-center mt-16">
          <button
            onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400
                       text-white font-semibold px-8 py-4 rounded-2xl
                       shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50
                       transition-all duration-300 hover:-translate-y-0.5">
            Quiero empezar
          </button>
        </div>
      </div>
    </section>
  );
}
