import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] border-t-4 border-[#111111]">
      <div className="section-inner footer-inner">

        {/* Wordmark grande */}
        <div style={{ borderBottom: "2px solid #333333", paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          <p className="font-black uppercase tracking-tighter text-[#F3EEE5]"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.85, letterSpacing: "-0.03em" }}>
            FaChat
          </p>
        </div>

        {/* Grid de info + links */}
        <div className="footer-grid">
          {/* Descripción + contacto */}
          <div>
            <p className="text-[#999999] font-medium leading-relaxed"
              style={{ fontSize: "0.95rem", maxWidth: "22rem", marginBottom: "1.75rem" }}>
              Asistente virtual de WhatsApp con IA para negocios en Argentina. Atendé clientes, tomá pedidos y gestioná turnos — sin estar presente.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer"
                className="text-[#F3EEE5] font-black text-xs uppercase tracking-tight border-2 border-[#444444] hover:border-[#F3EEE5] transition-colors"
                style={{ padding: "0.5rem 1rem" }}>
                WhatsApp
              </a>
              <a href="mailto:fabri.ab@hotmail.com"
                className="text-[#F3EEE5] font-black text-xs uppercase tracking-tight border-2 border-[#444444] hover:border-[#F3EEE5] transition-colors"
                style={{ padding: "0.5rem 1rem" }}>
                Email
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-[#555555] text-xs font-black uppercase tracking-widest"
              style={{ marginBottom: "1.25rem" }}>Producto</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { label: "Características", href: "#features" },
                { label: "Cómo funciona",   href: "#how"      },
                { label: "Precios",         href: "#pricing"  },
                { label: "FAQ",             href: "#faq"      },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                    className="text-[#999999] hover:text-[#F3EEE5] text-sm font-medium transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Acceso */}
          <div>
            <h4 className="text-[#555555] text-xs font-black uppercase tracking-widest"
              style={{ marginBottom: "1.25rem" }}>Acceso</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <li>
                <a href="https://fabproject-panel.vercel.app/" target="_blank" rel="noopener noreferrer"
                  className="text-[#999999] hover:text-[#F3EEE5] text-sm font-medium transition-colors">
                  Panel de clientes
                </a>
              </li>
              <li>
                <a href="#pricing"
                  className="text-[#999999] hover:text-[#F3EEE5] text-sm font-medium transition-colors">
                  Agendar demo
                </a>
              </li>
              <li>
                <Link href="/privacidad"
                  className="text-[#999999] hover:text-[#F3EEE5] text-sm font-medium transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos"
                  className="text-[#999999] hover:text-[#F3EEE5] text-sm font-medium transition-colors">
                  Términos de servicio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de copyright */}
        <div style={{
          borderTop: "1px solid #333333",
          paddingTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}>
          <p className="text-[#555555] text-xs font-bold uppercase tracking-widest">
            © {year} FaChat — Todos los derechos reservados
          </p>
          <p className="text-[#555555] text-xs font-medium">
            Hecho en Argentina 🇦🇷
          </p>
        </div>

      </div>
    </footer>
  );
}
