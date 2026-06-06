import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F3EEE5] border-t-4 border-[#111111]">
      <div className="section-inner py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#111111] text-[#F3EEE5] font-black text-xs flex items-center justify-center flex-shrink-0">
                FC
              </div>
              <span className="font-black text-xl tracking-tighter text-[#111111]">FaChat</span>
            </div>
            <p className="text-[#666666] text-sm leading-relaxed font-medium max-w-xs">
              Asistente virtual de WhatsApp para negocios en Argentina. Barberías, tiendas, restaurantes, y más.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer"
                className="text-xs font-bold text-[#666666] hover:text-[#111111] transition-colors border-2 border-[#111111] px-3 py-1.5">
                WhatsApp
              </a>
              <a href="mailto:fabri.ab@hotmail.com"
                className="text-xs font-bold text-[#666666] hover:text-[#111111] transition-colors border-2 border-[#111111] px-3 py-1.5">
                Email
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#111111] text-xs font-black uppercase tracking-widest">Producto</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Características", href: "#features" },
                { label: "Cómo funciona",   href: "#how"      },
                { label: "Precios",         href: "#pricing"  },
                { label: "FAQ",             href: "#faq"      },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-[#666666] hover:text-[#111111] text-sm transition-colors font-medium">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#111111] text-xs font-black uppercase tracking-widest">Acceso</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#111111] text-sm transition-colors font-medium">
                  Panel de clientes
                </a>
              </li>
              <li>
                <a href="#pricing"
                  className="text-[#666666] hover:text-[#111111] text-sm transition-colors font-medium">
                  Agendar demo
                </a>
              </li>
              <li>
                <Link href="/privacidad"
                  className="text-[#666666] hover:text-[#111111] text-sm transition-colors font-medium">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos"
                  className="text-[#666666] hover:text-[#111111] text-sm transition-colors font-medium">
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-[#111111] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] text-xs font-bold uppercase tracking-widest">
            © {year} FACHAT. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className="text-[#666666] text-xs font-medium">
            Hecho en Argentina 🇦🇷
          </p>
        </div>

      </div>
    </footer>
  );
}
