"use client";

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
  const [open, setOpen] = useState(null);
  const ref = useRef(null);

  // Solo animar el header y el footer — NO los items del acordeón
  // porque React los re-renderiza al cambiar `open` y pierden la clase "visible"
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
    // Solo observar elementos estáticos, no los items del acordeón
    ref.current?.querySelectorAll(".reveal-static").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0f1a] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header — usa reveal-static, no se re-renderiza */}
        <div className="reveal-static reveal text-center mb-14 space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase
                           text-brand-400 bg-brand-500/10 border border-brand-500/20
                           px-4 py-1.5 rounded-full">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            Todo lo que querés<br />
            <span className="gradient-text italic">saber antes de empezar</span>
          </h2>
        </div>

        {/* Items del acordeón — sin clase reveal, visibles siempre */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                open === i
                  ? "border-brand-500/30 bg-[#111827]"
                  : "border-white/6 bg-[#0c0f1a] hover:border-white/12"
              }`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className={`font-medium text-base leading-snug transition-colors ${
                  open === i ? "text-white" : "text-gray-300"
                }`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? "bg-brand-500 text-white" : "bg-white/5 text-gray-500"
                }`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <div style={{
                display: "grid",
                gridTemplateRows: open === i ? "1fr" : "0fr",
                transition: "grid-template-rows 0.3s ease",
              }}>
                <div style={{ overflow: "hidden" }}>
                  <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer — usa reveal-static */}
        <div className="reveal-static reveal text-center mt-10 text-sm text-gray-500">
          ¿Tenés otra pregunta?{" "}
          <a href="mailto:fabri.ab@hotmail.com"
            className="text-brand-400 hover:text-brand-300 underline underline-offset-4 transition-colors">
            Escribinos por email
          </a>
        </div>
      </div>
    </section>
  );
}
