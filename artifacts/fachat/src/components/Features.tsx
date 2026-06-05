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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase
                           text-blue-400 bg-blue-500/10 border border-blue-500/20
                           px-4 py-1.5 rounded-full">
            Características
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            Todo lo que tu negocio<br />
            <span className="gradient-text italic">necesita para crecer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            FaChat no es solo un chatbot. Es un sistema completo de atención y gestión para cualquier tipo de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const delays = ["", "delay-100", "delay-200", "delay-300"];
            return (
              <div key={i}
                className={`reveal ${delays[i % 4]}
                            group relative bg-[#0c0f1a] border border-white/[0.06]
                            rounded-2xl p-6 hover:border-blue-500/30
                            hover:bg-[#111827] transition-all duration-300
                            hover:-translate-y-1 cursor-default`}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                                bg-gradient-to-br from-blue-500/5 to-transparent" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20
                                  flex items-center justify-center mb-4
                                  group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
