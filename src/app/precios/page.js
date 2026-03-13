"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import api from "@/lib/api";
import { Save, DollarSign, AlertCircle, CheckCircle, RefreshCw } from "lucide-react";

const DEFAULT_PLANS = [
  {
    key:   "basico",
    name:  "Básico",
    price: "35000",
    desc:  "Para negocios que están empezando a automatizar.",
    features: [
      "Asistente WhatsApp activo 24/7",
      "Hasta 300 conversaciones / mes",
      "Panel de gestión en tiempo real",
      "Catálogo editable desde el panel",
      "Soporte por WhatsApp",
    ],
  },
  {
    key:   "profesional",
    name:  "Profesional",
    price: "65000",
    desc:  "Para negocios con mayor volumen que quieren crecer.",
    features: [
      "Todo lo del plan Básico",
      "Conversaciones ilimitadas",
      "Métricas y reportes avanzados",
      "Configuración de tono del bot",
      "Soporte prioritario",
    ],
  },
  {
    key:   "enterprise",
    name:  "Enterprise",
    price: "",
    desc:  "Para negocios con necesidades específicas.",
    features: [
      "Todo lo del plan Profesional",
      "Múltiples sucursales",
      "Integración con sistemas propios",
      "Onboarding personalizado",
      "Account manager dedicado",
    ],
  },
];

export default function PreciosPage() {
  const [plans,   setPlans]   = useState(DEFAULT_PLANS);
  const [saving,  setSaving]  = useState(false);
  const [loading, setLoading] = useState(true);
  const [toast,   setToast]   = useState(null); // { type: 'success'|'error', msg }

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get("/admin/landing-precios");
        if (data?.plans) {
          // Merge con defaults para no perder features si el backend no las devuelve
          setPlans(DEFAULT_PLANS.map((def) => {
            const saved = data.plans.find((p) => p.key === def.key);
            return saved ? { ...def, price: saved.price, desc: saved.desc ?? def.desc } : def;
          }));
        }
      } catch {
        // Si no existe el endpoint aún, usamos defaults silenciosamente
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put("/admin/landing-precios", {
        plans: plans.map(({ key, price, desc }) => ({ key, price, desc })),
      });
      showToast("success", "Precios actualizados. La landing los mostrará automáticamente.");
    } catch (err) {
      showToast("error", err.response?.data?.error || "No se pudieron guardar los precios.");
    } finally {
      setSaving(false);
    }
  };

  const updatePlan = (key, field, value) =>
    setPlans((prev) => prev.map((p) => p.key === key ? { ...p, [field]: value } : p));

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Precios de la landing</h1>
            <p className="text-sm text-gray-400 mt-1">
              Los cambios se reflejan automáticamente en fachat.app
            </p>
          </div>
          <button onClick={handleSave} disabled={saving || loading}
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700
                       text-white text-sm font-semibold px-5 py-2.5 rounded-xl
                       disabled:opacity-50 transition-colors">
            {saving
              ? <><RefreshCw className="w-4 h-4 animate-spin" /><span>Guardando...</span></>
              : <><Save className="w-4 h-4" /><span>Guardar cambios</span></>}
          </button>
        </div>

        {/* Toast */}
        {toast && (
          <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl border text-sm font-medium ${
            toast.type === "success"
              ? "bg-emerald-900/30 border-emerald-700 text-emerald-300"
              : "bg-red-900/30 border-red-700 text-red-300"
          }`}>
            {toast.type === "success"
              ? <CheckCircle className="w-4 h-4 flex-shrink-0" />
              : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
            {toast.msg}
          </div>
        )}

        {/* Cards de planes */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 space-y-4 animate-pulse">
                <div className="h-5 bg-gray-700 rounded w-1/3" />
                <div className="h-10 bg-gray-700 rounded w-1/2" />
                <div className="h-16 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div key={plan.key}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/20
                                  flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-violet-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
                </div>

                {/* Precio */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Precio mensual (ARS)
                  </label>
                  {plan.key === "enterprise" ? (
                    <div className="px-3 py-2.5 bg-gray-900/60 border border-gray-600 rounded-xl text-gray-500 text-sm">
                      Se muestra "A consultar" — no editable
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">ARS $</span>
                      <input
                        type="number"
                        value={plan.price}
                        onChange={(e) => updatePlan(plan.key, "price", e.target.value)}
                        placeholder="ej: 35000"
                        className="flex-1 px-3 py-2.5 bg-gray-900 border border-gray-600 text-gray-100
                                   rounded-xl text-sm focus:outline-none focus:ring-2
                                   focus:ring-violet-500 focus:border-violet-500"
                      />
                    </div>
                  )}
                </div>

                {/* Descripción */}
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Descripción corta
                  </label>
                  <textarea
                    value={plan.desc}
                    onChange={(e) => updatePlan(plan.key, "desc", e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2.5 bg-gray-900 border border-gray-600 text-gray-100
                               rounded-xl text-sm focus:outline-none focus:ring-2
                               focus:ring-violet-500 focus:border-violet-500 resize-none"
                  />
                </div>

                {/* Features (solo lectura por ahora) */}
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Características incluidas</p>
                  <ul className="space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                        <span className="text-violet-500 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-gray-600">
          * Los precios se almacenan en el backend y la landing los consulta en cada carga.
          Las características de cada plan se editan directamente en el código por ahora.
        </p>
      </div>
    </AdminLayout>
  );
}
