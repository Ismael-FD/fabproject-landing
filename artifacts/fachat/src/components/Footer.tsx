import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                        w-[400px] h-[200px] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/favicon.png" alt="FaChat" width={32} height={32} className="rounded-xl" />
              <span className="text-white font-semibold text-lg tracking-tight">FaChat</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs">
              Asistente virtual de WhatsApp para negocios en Argentina. Barberías, tiendas, restaurantes, y más. Automatizá la atención sin perder el trato humano.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors border border-white/[0.08] hover:border-blue-500/30 px-3 py-1.5 rounded-lg">
                WhatsApp
              </a>
              <a href="mailto:fabri.ab@hotmail.com"
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors border border-white/[0.08] hover:border-blue-500/30 px-3 py-1.5 rounded-lg">
                Email
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold">Producto</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Características", href: "#features" },
                { label: "Cómo funciona",   href: "#how"      },
                { label: "Precios",         href: "#pricing"  },
                { label: "FAQ",             href: "#faq"      },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors font-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold">Acceso</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors font-light">
                  Panel de clientes
                </a>
              </li>
              <li>
                <a href="#pricing"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors font-light">
                  Agendar demo
                </a>
              </li>
              <li>
                <Link href="/privacidad"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors font-light">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors font-light">
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-light">
            © {year} FaChat. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-xs font-light">
            Hecho en Argentina 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
