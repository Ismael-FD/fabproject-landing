import { useEffect, useRef } from "react";

const STEPS = [
  {
    num: "01",
    title: "Conectá tu WhatsApp",
    desc: "Vinculamos tu número de WhatsApp Business al sistema. Sin apps extra, sin complicaciones.",
  },
  {
    num: "02",
    title: "Configurá tu negocio",
    desc: "Cargamos tu catálogo, horarios y servicios. Personalizamos el tono del asistente para tu marca.",
  },
  {
    num: "03",
    title: "Atendé sin estar",
    desc: "Desde tu panel ves todo en tiempo real: pedidos, turnos y consultas. Tu negocio trabaja solo.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);

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
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" ref={ref} className="bg-[#F3EEE5] border-t-4 border-[#111111]">
      <div className="section-inner">

        <div className="reveal mb-12">
          <h2 className="font-black text-[clamp(40px,4vw,64px)] uppercase tracking-tighter text-[#111111]">
            3 PASOS SIMPLES
          </h2>
          <p className="text-lg text-[#666666] font-medium mt-3 max-w-md">
            Tu negocio automatizado en minutos, sin saber nada técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {STEPS.map((step, i) => {
            const delays = ["delay-100", "delay-200", "delay-300"];
            return (
              <div key={i}
                className={`reveal ${delays[i]} relative border-4 border-[#111111] bg-white p-8 pt-16 group hover:bg-[#111111] transition-colors duration-200 cursor-default overflow-hidden`}
              >
                <div className="absolute top-0 left-2 text-8xl font-black text-[#ECE4D7] pointer-events-none select-none group-hover:text-[#2a2a2a] transition-colors leading-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h3 className="font-black text-xl uppercase tracking-tight mb-3 text-[#111111] group-hover:text-[#F3EEE5] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] group-hover:text-[#999999] font-medium leading-relaxed text-sm transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12">
          <button
            onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] px-8 py-4 font-black uppercase tracking-tight text-sm hover:bg-transparent hover:text-[#111111] transition-colors"
          >
            QUIERO EMPEZAR
          </button>
        </div>

      </div>
    </section>
  );
}
