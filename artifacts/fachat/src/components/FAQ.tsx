import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Necesito conocimientos técnicos para usar FaChat?",
    a: "No. Nosotros nos encargamos de toda la configuración inicial. Vos solo necesitás tener un número de WhatsApp Business. El panel es simple e intuitivo, cualquier persona puede usarlo.",
  },
  {
    q: "¿Para que tipo de negocio sirve?",
    a: "FaChat funciona para cualquier negocio que atienda clientes por WhatsApp: barberías, peluquerías, casas de comida rápida, dietéticas, ferreterías, tiendas de ropa, y mucho más. Si tu negocio recibe consultas o pedidos por WhatsApp, FaChat te sirve.",
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
      { threshold: 0.05 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="bg-[#F3EEE5] border-t-4 border-[#111111]">
      <div className="section-inner">

        {/* Header — full width on mobile, side-by-side on desktop */}
        <div className="reveal">

          {/* Mobile: stacked header */}
          <div className="md:hidden mb-8">
            <h2
              className="font-black uppercase tracking-tighter text-[#111111] mb-4"
              style={{ fontSize: "clamp(36px, 10vw, 52px)", lineHeight: 0.9 }}
            >
              PREGUNTAS<br />FRECUENTES
            </h2>
            <p className="text-[#666666] font-medium text-sm leading-relaxed mb-5">
              Si no encontrás lo que buscás, escribinos.
            </p>
            <a
              href="mailto:fabri.ab@hotmail.com"
              className="inline-flex items-center font-black text-sm uppercase tracking-tight border-2 border-[#111111] bg-[#111111] text-[#F3EEE5] hover:bg-transparent hover:text-[#111111] transition-colors px-5 py-3"
            >
              Escribinos por email
            </a>
          </div>

          {/* Desktop: two-column layout */}
          <div
            className="hidden md:grid"
            style={{ gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}
          >
            <div style={{ position: "sticky", top: "6rem" }}>
              <h2
                className="font-black uppercase tracking-tighter text-[#111111]"
                style={{ fontSize: "clamp(36px,3.5vw,56px)", lineHeight: 0.9, marginBottom: "1.5rem" }}
              >
                PREGUNTAS<br />FRECUENTES
              </h2>
              <p className="text-[#666666] font-medium" style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                Si no encontrás lo que buscás, escribinos.
              </p>
              <a
                href="mailto:fabri.ab@hotmail.com"
                className="inline-flex items-center font-black text-sm uppercase tracking-tight border-2 border-[#111111] bg-[#111111] text-[#F3EEE5] hover:bg-transparent hover:text-[#111111] transition-colors"
                style={{ padding: "0.75rem 1.5rem" }}
              >
                Escribinos por email
              </a>
            </div>

            {/* Accordion — desktop */}
            <div className="border-t-4 border-[#111111]">
              {FAQS.map((faq, i) => (
                <FaqItem key={i} faq={faq} i={i} open={open} setOpen={setOpen} />
              ))}
            </div>
          </div>

          {/* Accordion — mobile */}
          <div className="md:hidden border-t-4 border-[#111111]">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} i={i} open={open} setOpen={setOpen} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  i,
  open,
  setOpen,
}: {
  faq: { q: string; a: string };
  i: number;
  open: number | null;
  setOpen: (v: number | null) => void;
}) {
  const isOpen = open === i;
  return (
    <div className="border-b-4 border-[#111111]">
      <button
        onClick={() => setOpen(isOpen ? null : i)}
        className="w-full flex items-center justify-between gap-4 text-left py-5"
      >
        <span
          className="font-black uppercase tracking-tight text-[#111111] leading-snug"
          style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)" }}
        >
          {faq.q}
        </span>
        <div
          className={`flex items-center justify-center flex-shrink-0 border-2 border-[#111111] transition-colors ${isOpen ? "bg-[#111111] text-[#F3EEE5]" : "bg-transparent text-[#111111]"}`}
          style={{ width: "2rem", height: "2rem", minWidth: "2rem" }}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.25s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            className="text-[#666666] font-medium leading-relaxed"
            style={{ fontSize: "0.9rem", paddingBottom: "1.25rem" }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}
