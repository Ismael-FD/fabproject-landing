import { useEffect, useRef } from "react";
import {
  Clock, ShoppingBag, BookOpen, BarChart2,
  BellRing, Pencil, Zap, ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "Disponible 24/7",
    desc: "Tu bot nunca duerme. Atiende consultas y toma pedidos o reservas a cualquier hora, incluso cuando el local está cerrado.",
  },
  {
    icon: ShoppingBag,
    title: "Gestiona pedidos y turnos",
    desc: "El cliente consulta, reserva o pide. El bot lo procesa y te notifica al instante. Sin intermediarios ni errores.",
  },
  {
    icon: BookOpen,
    title: "Catálogo siempre actualizado",
    desc: "Editá productos, precios, servicios o disponibilidad desde tu panel. Los cambios se reflejan en el bot al instante.",
  },
  {
    icon: BarChart2,
    title: "Dashboard con métricas",
    desc: "Mirá cuántas consultas tuviste, en qué horarios, cuánto facturaste. Tomá decisiones con datos reales.",
  },
  {
    icon: BellRing,
    title: "Alertas en tiempo real",
    desc: "Cada pedido o turno nuevo genera una notificación inmediata en tu panel. Nunca perdés una oportunidad.",
  },
  {
    icon: Pencil,
    title: "Tono personalizable",
    desc: "Elegí cómo habla tu asistente: formal, informal, con emojis. Se adapta a la personalidad de tu negocio.",
  },
  {
    icon: Zap,
    title: "Integración en minutos",
    desc: "Sin instalar apps, sin programar. Solo conectamos tu número de WhatsApp y en menos de 10 minutos está activo.",
  },
  {
    icon: ShieldCheck,
    title: "Datos seguros y privados",
    desc: "Toda la información de tus clientes se almacena de forma segura, exclusivamente para vos.",
  },
];

export default function Features() {
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
    <section id="features" ref={ref}
      className="bg-[#ECE4D7] border-t-4 border-[#111111]">
      <div className="section-inner">

        <div className="reveal mb-12">
          <h2 className="text-[clamp(40px,4vw,64px)] font-black uppercase tracking-tighter text-[#111111] leading-tight">
            TODO LO QUE<br />NECESITÁS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const delays = ["", "delay-100", "delay-200", "delay-300"];
            return (
              <div key={i}
                className={`reveal ${delays[i % 4]} group bg-white border-4 border-[#111111] p-6 hover:-translate-y-1 transition-transform duration-200 cursor-default`}
                style={{ boxShadow: "6px 6px 0px 0px #111111" }}
              >
                <div className="w-12 h-12 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#111111]" />
                </div>
                <h3 className="text-[#111111] font-black text-base uppercase tracking-tight mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
