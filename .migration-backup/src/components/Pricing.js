"use client";

import { useState, useEffect, useRef } from "react";
import { Check, Zap } from "lucide-react";

const PLAN_META = {
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

function formatPrice(raw) {
  if (!raw) return "";
  const n = parseInt(String(raw).replace(/\D/g, ""), 10);
  if (isNaN(n)) return raw;
  return n.toLocaleString("es-AR");
}

export default function Pricing() {
  const [plans, setPlans] = useState(DEFAULT_PLANS);
  const ref = useRef(null);

  useEffect(() => {
    // Intentar cargar precios dinámicos del backend
    const load = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "https://manlessly-unparadoxal-leeann.ngrok-free.dev"}/admin/landing-precios`,
          { headers: { "ngrok-skip-browser-warning": "true" } }
        );
        if (!res.ok) return;
        const data = await res.json();
        if (data?.plans?.length) {
          setPlans(data.plans);
        }
      } catch {
        // Silencioso — usa defaults
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
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCTA = (planName) => {
    const msg = encodeURIComponent(`Hola! Quiero agendar una demo del plan ${planName} de FaChat.`);
    window.open(`https://wa.me/5491100000000?text=${msg}`, "_blank");
  };

  return (
    <section id="pricing" ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] rounded-full bg-brand-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="reveal text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase
                           text-brand-400 bg-brand-500/10 border border-brand-500/20
                           px-4 py-1.5 rounded-full">
            Planes y precios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight">
            Precios claros,<br />
            <span className="gradient-text italic">sin sorpresas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Todos los planes incluyen configuración, soporte y panel web. Sin costo de activación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const meta = PLAN_META[plan.key] || {};
            return (
              <div key={plan.key}
                className={`reveal delay-${(i + 1) * 100} relative flex flex-col rounded-3xl p-8
                            border transition-all duration-300 hover:-translate-y-1 ${
                  meta.highlight
                    ? "bg-brand-500/10 border-brand-500/40 shadow-2xl shadow-brand-500/20"
                    : "bg-[#0c0f1a] border-white/8 hover:border-white/15"
                }`}>

                {meta.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2
                                  flex items-center gap-1.5
                                  bg-brand-500 text-white text-xs font-bold
                                  px-4 py-1.5 rounded-full shadow-lg shadow-brand-500/40">
                    <Zap className="w-3 h-3" />
                    {meta.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-semibold text-xl mb-1">{meta.name}</h3>
                  <p className="text-gray-500 text-sm font-light">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  {plan.price ? (
                    <div className="flex items-end gap-1">
                      <span className="text-xs text-gray-500 mb-2">ARS $</span>
                      <span className={`text-4xl font-bold leading-none ${
                        meta.highlight ? "text-brand-300" : "text-white"
                      }`}>
                        {formatPrice(plan.price)}
                      </span>
                      <span className="text-gray-500 text-sm mb-1">/ mes</span>
                    </div>
                  ) : (
                    <span className={`text-4xl font-bold ${
                      meta.highlight ? "text-brand-300" : "text-white"
                    }`}>
                      A consultar
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {(meta.features || []).map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        meta.highlight ? "bg-brand-500/30" : "bg-brand-500/15"
                      }`}>
                        <Check className="w-3 h-3 text-brand-400" />
                      </div>
                      <span className="text-gray-300 text-sm font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTA(meta.name)}
                  className={`w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                    meta.highlight
                      ? "bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/30 hover:-translate-y-0.5"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                  }`}>
                  {meta.cta}
                </button>
              </div>
            );
          })}
        </div>

        <div className="reveal text-center mt-10 text-sm text-gray-500 font-light">
          ✦ Todos los planes incluyen 7 días de prueba gratuita · Sin permanencia mínima
        </div>
      </div>
    </section>
  );
}
