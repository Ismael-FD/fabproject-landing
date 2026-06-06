import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Necesito conocimientos técnicos para usar FaChat?",
    a: "No. Nosotros nos encargamos de toda la configuración inicial. Vos solo necesitás tener un número de WhatsApp Business. El panel es simple e intuitivo, cualquier persona puede usarlo.",
  },
  {
    q: "¿Solo sirve para restaurantes?",
    a: "Para nada. FaChat funciona para cualquier negocio que atienda clientes por WhatsApp: barberías, peluquerías, casas de comida rápida, dietéticas, ferreterías, tiendas de ropa, y mucho más. Si tu negocio recibe consultas o pedidos por WhatsApp, FaChat te sirve.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar activo?",
    a: "Una vez que agendás la demo y confirmamos el alta, en menos de 24 horas tu asistente ya está activo. En muchos casos lo activamos el mismo día.",
  },
  {
    q: "¿Puedo cambiar el catálogo o los precios yo mismo?",
    a: "Sí, desde tu panel web podés agregar, editar o desactivar productos y servicios en cualquier momento. Los cambios se reflejan automáticamente en el bot al instante.",
  },
  {
    q: "¿Qué pasa si un cliente quiere hablar con una persona real?",
    a: "El asistente detecta cuando el cliente necesita atención humana y deriva la conversación a tu número personal o al encargado que configures. Vos definís cuándo y cómo se hace la derivación.",
  },
  {
    q: "¿El bot atiende fuera del horario del negocio?",
    a: "Sí. Podés configurar el horario de atención. Fuera de ese horario el bot informa que el local está cerrado y puede registrar consultas o pedidos para cuando abran.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay permanencia mínima. Si en algún momento decidís pausar o cancelar, avisás y listo. Sin cargos adicionales ni letras chicas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
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
    ref.current?.querySelectorAll(".reveal-static").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="bg-[#F3EEE5] py-28 px-6">

      <div className="max-w-3xl mx-auto">

        <div className="reveal-static reveal text-center mb-14">
          <h2 className="font-black text-[clamp(40px,5vw,60px)] uppercase tracking-tighter text-[#111111]">
            PREGUNTAS<br />FRECUENTES
          </h2>
        </div>

        <div className="space-y-0 border-t-4 border-[#111111]">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b-4 border-[#111111]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-2 py-5 text-left group"
              >
                <span className="font-black text-base uppercase tracking-tight text-[#111111] leading-snug">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 border-2 border-[#111111] flex items-center justify-center flex-shrink-0 transition-colors ${
                  open === i ? "bg-[#111111] text-[#F3EEE5]" : "bg-transparent text-[#111111]"
                }`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <div style={{
                display: "grid",
                gridTemplateRows: open === i ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s ease",
              }}>
                <div style={{ overflow: "hidden" }}>
                  <p className="px-2 pb-5 text-[#666666] text-sm leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-static reveal text-center mt-10 text-sm text-[#666666] font-medium">
          ¿Tenés otra pregunta?{" "}
          <a href="mailto:fabri.ab@hotmail.com"
            className="text-[#111111] font-black underline underline-offset-4 hover:text-[#666666] transition-colors">
            Escribinos por email
          </a>
        </div>
      </div>
    </section>
  );
}
