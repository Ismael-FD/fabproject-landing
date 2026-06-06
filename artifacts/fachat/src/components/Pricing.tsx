import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const PLAN_META: Record<string, { name: string; highlight: boolean; badge?: string; features: string[]; cta: string }> = {
  basico: {
    name: "Básico",
    highlight: false,
    features: [
      "Asistente WhatsApp activo 24/7",
      "Hasta 300 conversaciones / mes",
      "Panel de gestión en tiempo real",
      "Catálogo editable desde el panel",
      "Soporte por WhatsApp",
    ],
    cta: "Agendar demo",
  },
  profesional: {
    name: "Profesional",
    highlight: true,
    badge: "Más elegido",
    features: [
      "Todo lo del plan Básico",
      "Conversaciones ilimitadas",
      "Métricas y reportes avanzados",
      "Configuración de tono del bot",
      "Soporte prioritario",
    ],
    cta: "Agendar demo",
  },
  enterprise: {
    name: "Enterprise",
    highlight: false,
    features: [
      "Todo lo del plan Profesional",
      "Múltiples sucursales",
      "Integración con sistemas propios",
      "Onboarding personalizado",
      "Account manager dedicado",
    ],
    cta: "Contactar",
  },
};

const DEFAULT_PLANS = [
  { key: "basico",      price: "35.000", desc: "Para negocios que están empezando a automatizar." },
  { key: "profesional", price: "65.000", desc: "Para negocios con mayor volumen que quieren crecer." },
  { key: "enterprise",  price: "",       desc: "Para negocios con necesidades específicas." },
];

function formatPrice(raw: string) {
  if (!raw) return "";
  const n = parseInt(String(raw).replace(/\D/g, ""), 10);
  if (isNaN(n)) return raw;
  return n.toLocaleString("es-AR");
}

export default function Pricing() {
  const [plans, setPlans] = useState(DEFAULT_PLANS);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL || "https://manlessly-unparadoxal-leeann.ngrok-free.dev"}/admin/landing-precios`,
          { headers: { "ngrok-skip-browser-warning": "true" } }
        );
        if (!res.ok) return;
        const data = await res.json();
        if (data?.plans?.length) setPlans(data.plans);
      } catch {
        // Silent fallback to defaults
      }
    };
    load();
  }, []);

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

  const handleCTA = (planName: string) => {
    const msg = encodeURIComponent(`Hola! Quiero agendar una demo del plan ${planName} de FaChat.`);
    window.open(`https://wa.me/5491100000000?text=${msg}`, "_blank");
  };

  const visiblePlans = plans.filter((p) => p.key === "basico" || p.key === "profesional");

  return (
    <section id="pricing" ref={ref} className="bg-[#ECE4D7] border-t-4 border-[#111111]">
      <div className="section-inner">

        <div className="reveal mb-12">
          <h2 className="font-black text-[clamp(40px,4vw,64px)] uppercase tracking-tighter text-[#111111]">
            PRECIOS CLAROS
          </h2>
          <p className="text-lg text-[#666666] font-medium mt-3 max-w-md">
            Sin sorpresas. Todos los planes incluyen configuración, soporte y panel web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {visiblePlans.map((plan, i) => {
            const meta = PLAN_META[plan.key] || {};
            const delays = ["delay-100", "delay-200"];
            const isHighlight = meta.highlight;

            return (
              <div key={plan.key}
                className={`reveal ${delays[i]} relative flex flex-col border-4 border-[#111111] p-8 ${
                  isHighlight ? "bg-[#111111] text-[#F3EEE5]" : "bg-white text-[#111111]"
                }`}
                style={isHighlight
                  ? { boxShadow: "12px 12px 0px 0px #F3EEE5, 12px 12px 0px 3px #111111" }
                  : { boxShadow: "6px 6px 0px 0px #111111" }
                }
              >
                {meta.badge && (
                  <div className="absolute top-0 right-0 bg-[#F3EEE5] text-[#111111] font-black text-xs uppercase px-3 py-1.5 border-b-4 border-l-4 border-[#111111]">
                    {meta.badge}
                  </div>
                )}

                <div className={`text-xs font-black uppercase tracking-widest mb-4 ${isHighlight ? "text-[#888888]" : "text-[#666666]"}`}>
                  {meta.name}
                </div>

                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-end gap-1 flex-wrap">
                      <span className={`text-xs mb-1.5 ${isHighlight ? "text-[#888888]" : "text-[#666666]"}`}>ARS $</span>
                      <span className={`text-5xl font-black tracking-tighter leading-none ${isHighlight ? "text-[#F3EEE5]" : "text-[#111111]"}`}>
                        {formatPrice(plan.price)}
                      </span>
                      <span className={`text-xl mb-1 ${isHighlight ? "text-[#888888]" : "text-[#666666]"}`}>/mes</span>
                    </div>
                  ) : (
                    <span className={`text-3xl font-black ${isHighlight ? "text-[#F3EEE5]" : "text-[#111111]"}`}>
                      A consultar
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {(meta.features || []).map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${isHighlight ? "border-[#F3EEE5]" : "border-[#111111]"}`}>
                        <Check className={`w-2.5 h-2.5 ${isHighlight ? "text-[#F3EEE5]" : "text-[#111111]"}`} strokeWidth={4} />
                      </div>
                      <span className={`text-sm font-medium ${isHighlight ? "text-[#CCCCCC]" : "text-[#444444]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTA(meta.name)}
                  className={`w-full py-4 font-black uppercase tracking-tight text-sm border-2 transition-colors ${
                    isHighlight
                      ? "bg-[#F3EEE5] text-[#111111] border-[#F3EEE5] hover:bg-transparent hover:text-[#F3EEE5]"
                      : "bg-white text-[#111111] border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5]"
                  }`}
                >
                  {meta.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-8 text-sm text-[#666666] font-medium">
          ✦ Todos los planes incluyen 7 días de prueba gratuita · Sin permanencia mínima
        </div>

      </div>
    </section>
  );
}
