import React from 'react';
import { Bot, Calendar, CreditCard, LayoutDashboard, ShieldCheck, BarChart, Utensils, Scissors, ShoppingBag, Car, Check } from 'lucide-react';

export function MangaLanding() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-[#F3EEE5] text-[#111111]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
        
        .manga-shadow-soft {
          box-shadow: 8px 8px 0px 0px #111111;
        }
        
        .manga-shadow-strong {
          box-shadow: 16px 16px 0px 0px #111111;
        }
        
        .manga-shadow-pro {
          box-shadow: 16px 16px 0px 0px #F3EEE5, 16px 16px 0px 4px #111111;
        }
      `}</style>

      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 h-20 bg-[#F3EEE5] border-b-4 border-[#111111] flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#111111] text-[#F3EEE5] font-black text-xl flex items-center justify-center">FC</div>
          <span className="font-black text-2xl tracking-tighter text-[#111111]">FaChat</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[#666666] font-semibold">
          <a href="#" className="hover:text-[#111111]">Características</a>
          <a href="#" className="hover:text-[#111111]">Cómo funciona</a>
          <a href="#" className="hover:text-[#111111]">Precios</a>
          <a href="#" className="hover:text-[#111111]">FAQ</a>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noreferrer" className="hidden md:block font-bold">Ingresar al panel</a>
          <button className="bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] px-6 py-2.5 font-black uppercase hover:bg-transparent hover:text-[#111111] transition-colors">
            Comenzar
          </button>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="bg-[#F3EEE5] pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-block border border-[#111111] bg-[#ECE4D7] px-3 py-1 text-xs font-black uppercase tracking-widest mb-6">
              IA PARA CUALQUIER NEGOCIO
            </div>
            
            <h1 className="font-black uppercase tracking-tighter text-[80px] md:text-[96px] leading-[0.9] mb-8 flex flex-col">
              <span>TU NEGOCIO,</span>
              <span>ATENDIDO</span>
              <span>SOLO.</span>
            </h1>
            
            <p className="text-xl text-[#666666] font-medium leading-relaxed max-w-lg mb-10">
              Un asistente de WhatsApp con IA que toma turnos, pedidos y consultas por vos — para restaurantes, peluquerías, tiendas, lavaderos y más.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="border-2 border-[#111111] bg-white px-3 py-1.5 text-sm font-black flex items-center gap-2">
                <Utensils className="w-4 h-4" /> Restaurantes
              </div>
              <div className="border-2 border-[#111111] bg-white px-3 py-1.5 text-sm font-black flex items-center gap-2">
                <Scissors className="w-4 h-4" /> Peluquerías
              </div>
              <div className="border-2 border-[#111111] bg-white px-3 py-1.5 text-sm font-black flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Tiendas
              </div>
              <div className="border-2 border-[#111111] bg-white px-3 py-1.5 text-sm font-black flex items-center gap-2">
                <Car className="w-4 h-4" /> Lavaderos
              </div>
            </div>
            
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-[#111111] text-[#F3EEE5] border-2 border-[#111111] px-8 py-4 font-black uppercase hover:bg-transparent hover:text-[#111111] transition-colors">
                EMPEZAR GRATIS →
              </button>
              <span className="font-semibold text-[#666666] uppercase text-sm">
                * SIN TARJETA DE CRÉDITO
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div className="border-4 border-[#111111] bg-white p-6 pt-16 relative manga-shadow-strong">
              {/* Top bar strip */}
              <div className="absolute top-0 left-0 w-full h-10 bg-[#ECE4D7] border-b-4 border-[#111111] flex items-center px-4 gap-1.5">
                <div className="w-4 h-4 bg-[#111111]"></div>
                <div className="w-4 h-4 bg-[#111111]"></div>
                <div className="w-4 h-4 bg-[#111111]"></div>
              </div>
              
              <div className="font-black text-xs uppercase tracking-widest mb-6">
                ✂ PELUQUERÍA DON MARIO
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="self-end bg-[#F3EEE5] border-2 border-[#111111] p-3 text-sm relative">
                  Hola! Quiero sacar turno para mañana ✂️
                  {/* Manga tail */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F3EEE5] border-r-2 border-b-2 border-[#111111] transform rotate-45"></div>
                </div>
                
                <div className="self-start bg-white border-2 border-[#111111] p-3 text-sm relative">
                  ¡Hola! Tenemos turnos a las 10:00, 12:30 y 16:00. ¿Cuál preferís?
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-l-2 border-b-2 border-[#111111] transform rotate-45"></div>
                </div>
                
                <div className="self-end bg-[#F3EEE5] border-2 border-[#111111] p-3 text-sm relative">
                  A las 10, para corte y barba
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#F3EEE5] border-r-2 border-b-2 border-[#111111] transform rotate-45"></div>
                </div>
                
                <div className="self-start border-2 border-[#111111] bg-white p-3 mt-2 relative">
                  <div className="font-black text-xs uppercase border-b-2 border-[#111111] pb-1 mb-2">
                    TURNO CONFIRMADO ✓
                  </div>
                  <div className="text-xs mb-3">
                    📅 Mañana · 10:00 hs · Corte + Barba
                  </div>
                  <div className="font-black text-xs">
                    ¡TE ESPERAMOS!
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -right-6 -top-6 border-4 border-[#111111] bg-[#F3EEE5] p-2 rotate-12 z-10">
              <span className="font-black text-2xl">!</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES */}
      <section className="bg-[#ECE4D7] border-t-4 border-[#111111] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-16 border-l-8 border-[#111111] pl-6 whitespace-pre-line">
            TODO LO QUE{'\n'}NECESITÁS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border-4 border-[#111111] p-8 manga-shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-6">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#111111]">ASISTENTE IA 24/7</h3>
              <p className="text-[#666666] font-medium leading-relaxed">Respondé consultas, tomá turnos y gestioná pedidos automáticamente por WhatsApp, sin intervención humana.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white border-4 border-[#111111] p-8 manga-shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-6">
                <LayoutDashboard className="w-8 h-8" />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#111111]">PANEL DE CONTROL</h3>
              <p className="text-[#666666] font-medium leading-relaxed">Todo tu negocio en una pantalla: clientes, turnos, pedidos y métricas en tiempo real.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white border-4 border-[#111111] p-8 manga-shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#111111]">TURNOS Y RESERVAS</h3>
              <p className="text-[#666666] font-medium leading-relaxed">El bot agenda, confirma y recuerda turnos a tus clientes de forma automática.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white border-4 border-[#111111] p-8 manga-shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#111111]">COBROS INTEGRADOS</h3>
              <p className="text-[#666666] font-medium leading-relaxed">Recibí pagos por MercadoPago o transferencia con confirmación automática.</p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white border-4 border-[#111111] p-8 manga-shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#111111]">ANÁLISIS DEL NEGOCIO</h3>
              <p className="text-[#666666] font-medium leading-relaxed">Métricas de atención, servicios más solicitados y clientes recurrentes.</p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white border-4 border-[#111111] p-8 manga-shadow-soft hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 border-2 border-[#111111] bg-[#F3EEE5] flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#111111]">SIN SPAM</h3>
              <p className="text-[#666666] font-medium leading-relaxed">Filtros inteligentes para mensajes irrelevantes — solo atendés lo que importa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="bg-[#F3EEE5] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-black text-6xl uppercase tracking-tighter">3 PASOS SIMPLES</h2>
            <p className="text-xl text-[#666666] font-medium mt-6">Tu negocio automatizado en minutos.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 mt-16">
            <div className="border-4 border-[#111111] bg-white p-8 relative group hover:bg-[#111111] hover:text-[#F3EEE5] transition-colors mt-8 lg:mt-0">
              <div className="absolute -top-10 -left-4 text-8xl font-black text-[#ECE4D7] pointer-events-none z-0 group-hover:text-[#333333] transition-colors">
                01
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="font-black text-2xl uppercase tracking-tight mb-4">CONECTÁ TU WHATSAPP</h3>
                <p className="text-[#666666] group-hover:text-[#999999] font-medium leading-relaxed transition-colors">Vinculamos tu número de WhatsApp Business al sistema. Sin apps extra, sin complicaciones.</p>
              </div>
            </div>
            
            <div className="border-4 border-[#111111] bg-white p-8 relative group hover:bg-[#111111] hover:text-[#F3EEE5] transition-colors mt-8 lg:mt-0">
              <div className="absolute -top-10 -left-4 text-8xl font-black text-[#ECE4D7] pointer-events-none z-0 group-hover:text-[#333333] transition-colors">
                02
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="font-black text-2xl uppercase tracking-tight mb-4">CONFIGURÁ TU NEGOCIO</h3>
                <p className="text-[#666666] group-hover:text-[#999999] font-medium leading-relaxed transition-colors">Cargamos tu catálogo, horarios y servicios. Personalizamos el tono del asistente para tu marca.</p>
              </div>
            </div>
            
            <div className="border-4 border-[#111111] bg-white p-8 relative group hover:bg-[#111111] hover:text-[#F3EEE5] transition-colors mt-8 lg:mt-0">
              <div className="absolute -top-10 -left-4 text-8xl font-black text-[#ECE4D7] pointer-events-none z-0 group-hover:text-[#333333] transition-colors">
                03
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="font-black text-2xl uppercase tracking-tight mb-4">ATENDÉ SIN ESTAR</h3>
                <p className="text-[#666666] group-hover:text-[#999999] font-medium leading-relaxed transition-colors">Desde tu panel ves todo en tiempo real: pedidos, turnos y consultas. Tu negocio trabaja solo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <section className="bg-[#ECE4D7] border-t-4 border-[#111111] py-32 px-6" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-black text-6xl uppercase tracking-tighter mb-4">PRECIOS CLAROS</h2>
            <p className="text-xl text-[#666666] font-medium">Sin sorpresas, elegí el plan ideal para tu negocio.</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-start mt-8">
            {/* BASIC PLAN */}
            <div className="bg-white border-4 border-[#111111] p-8">
              <div className="text-sm font-black uppercase tracking-widest text-[#666666] mb-4">BÁSICO</div>
              <div className="mb-8">
                <span className="text-6xl font-black tracking-tighter">ARS $35.000</span>
                <span className="text-2xl text-[#666666]">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#111111] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Asistente WhatsApp activo 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#111111] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Hasta 300 conversaciones / mes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#111111] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Panel de gestión en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#111111] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Catálogo editable desde el panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#111111] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Soporte por WhatsApp</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open("https://wa.me/5491100000000?text=Hola! Quiero agendar una demo del plan Básico de FaChat.", "_blank")}
                className="w-full bg-white border-2 border-[#111111] py-4 font-black uppercase text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5] transition-colors"
              >
                ELEGIR BÁSICO
              </button>
            </div>
            
            {/* PRO PLAN */}
            <div className="bg-[#111111] text-[#F3EEE5] border-4 border-[#111111] p-8 relative manga-shadow-pro">
              <div className="absolute top-0 right-0 bg-[#F3EEE5] text-[#111111] font-black text-xs uppercase px-4 py-2 border-b-4 border-l-4 border-[#111111]">
                MÁS POPULAR
              </div>
              
              <div className="text-sm font-black uppercase tracking-widest text-[#999999] mb-4">PROFESIONAL</div>
              <div className="mb-8">
                <span className="text-6xl font-black tracking-tighter text-[#F3EEE5]">ARS $65.000</span>
                <span className="text-2xl text-[#999999]">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#F3EEE5] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F3EEE5]" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Todo lo del plan Básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#F3EEE5] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F3EEE5]" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Conversaciones ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#F3EEE5] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F3EEE5]" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Métricas y reportes avanzados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#F3EEE5] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F3EEE5]" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Configuración de tono del bot</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="border-2 border-[#F3EEE5] w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#F3EEE5]" strokeWidth={4} />
                  </div>
                  <span className="font-medium">Soporte prioritario</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open("https://wa.me/5491100000000?text=Hola! Quiero agendar una demo del plan Profesional de FaChat.", "_blank")}
                className="w-full bg-[#F3EEE5] text-[#111111] border-2 border-[#F3EEE5] py-4 font-black uppercase hover:bg-transparent hover:text-[#F3EEE5] transition-colors"
              >
                ELEGIR PROFESIONAL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-[#F3EEE5] border-t-4 border-[#111111] py-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-col md:flex-row gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#111111] text-[#F3EEE5] font-black text-sm flex items-center justify-center">FC</div>
            <span className="font-black text-xl tracking-tighter text-[#111111]">FaChat</span>
          </div>
          
          <div className="text-[#666666] font-bold text-sm uppercase tracking-widest text-center md:text-right">
            © 2025 FACHAT. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
}
