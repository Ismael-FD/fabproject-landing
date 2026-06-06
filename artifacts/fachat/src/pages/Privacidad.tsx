import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LAST_UPDATE = "13 de marzo de 2026";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

const sections = [
  {
    num: "01",
    title: "Responsable del Tratamiento de Datos",
    content: (
      <div className="space-y-3 text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>
        <p>El responsable del tratamiento de los datos personales es <strong className="text-[#111111]">FaChat</strong>, operando conforme a las leyes de la <strong className="text-[#111111]">{COUNTRY}</strong>.</p>
        <p>Para ejercer tus derechos o realizar consultas sobre privacidad, contactanos en: <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#111111] font-bold underline underline-offset-2">{EMAIL_LEGAL}</a>.</p>
        <p>Esta política se aplica a todos los usuarios del sitio web de FaChat y a todos los Clientes que contraten nuestros servicios.</p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Qué Datos Recopilamos",
    content: (
      <div className="space-y-6" style={{ fontSize: "0.95rem" }}>
        <div>
          <p className="font-black text-xs uppercase tracking-widest text-[#111111] mb-3">2.1 Datos del Cliente</p>
          <ul className="space-y-2 text-[#666666] leading-relaxed">
            {["Nombre completo o razón social del negocio.", "Dirección de correo electrónico.", "Número de teléfono de contacto.", "Número de WhatsApp Business del negocio.", "Catálogo de productos o servicios con nombres, descripciones y precios.", "Credenciales de acceso al panel web (contraseña con hash, nunca en texto plano).", "Historial de pagos y plan contratado."].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-black text-xs uppercase tracking-widest text-[#111111] mb-3">2.2 Datos de los Usuarios Finales</p>
          <ul className="space-y-2 text-[#666666] leading-relaxed">
            {["Número de teléfono de WhatsApp del usuario final.", "Nombre de perfil de WhatsApp.", "Contenido de los mensajes intercambiados con el asistente virtual.", "Datos de los pedidos realizados.", "Fecha, hora y duración de las conversaciones."].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Cómo Usamos los Datos",
    content: (
      <ul className="space-y-2 text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>
        {["Prestar el servicio de asistente virtual de WhatsApp.", "Gestionar la relación comercial con el Cliente.", "Procesar pedidos y reservas realizados a través del asistente.", "Mejorar el servicio y el rendimiento del asistente.", "Cumplir con obligaciones legales y fiscales."].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "04",
    title: "Compartición de Datos con Terceros",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>FaChat no vende ni alquila datos personales a terceros. Podemos compartir datos únicamente con proveedores de infraestructura y servicios necesarios para el funcionamiento del sistema, siempre bajo acuerdos de confidencialidad.</p>
    ),
  },
  {
    num: "05",
    title: "Conservación de los Datos",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>Los datos se conservan durante la vigencia del contrato y por un período adicional de 2 años para cumplir con obligaciones legales. Tras ese período, los datos son eliminados o anonimizados de manera irreversible.</p>
    ),
  },
  {
    num: "06",
    title: "Seguridad de los Datos",
    content: (
      <ul className="space-y-2 text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>
        {["Cifrado de datos en tránsito mediante TLS/HTTPS.", "Almacenamiento de contraseñas con hash bcrypt.", "Autenticación mediante JWT con tiempo de expiración.", "Acceso restringido mediante autenticación por clave SSH.", "Copias de seguridad periódicas de la base de datos."].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "07",
    title: "Tus Derechos — Ley 25.326",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>De acuerdo con la Ley N° 25.326 de la {COUNTRY}, tenés derecho a acceder, rectificar, suprimir, y oponerte al tratamiento de tus datos personales. Para ejercer cualquiera de estos derechos, enviá un email a <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#111111] font-bold underline underline-offset-2">{EMAIL_LEGAL}</a>.</p>
    ),
  },
  {
    num: "08",
    title: "Cookies y Tecnologías de Seguimiento",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>El sitio web puede utilizar cookies técnicas estrictamente necesarias para el funcionamiento. No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegación con redes de publicidad.</p>
    ),
  },
  {
    num: "09",
    title: "Cambios en esta Política",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "0.95rem" }}>Podemos actualizar esta Política periódicamente. Cuando realicemos cambios sustanciales, te notificaremos por correo electrónico con al menos <strong className="text-[#111111]">15 días de anticipación</strong>.</p>
    ),
  },
  {
    num: "10",
    title: "Contacto y Ejercicio de Derechos",
    content: (
      <div
        className="border-4 border-[#111111] bg-white"
        style={{ padding: "2rem", boxShadow: "6px 6px 0px 0px #111111" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6" style={{ marginBottom: "1.25rem" }}>
          <span className="font-black text-xs uppercase tracking-widest text-[#111111] sm:w-16 flex-shrink-0">Email</span>
          <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#666666] font-medium hover:text-[#111111] transition-colors break-all" style={{ fontSize: "0.95rem" }}>{EMAIL_LEGAL}</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6" style={{ paddingTop: "1.25rem", borderTop: "2px solid #ECE4D7" }}>
          <span className="font-black text-xs uppercase tracking-widest text-[#111111] sm:w-16 flex-shrink-0">Panel</span>
          <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-[#666666] font-medium hover:text-[#111111] transition-colors break-all" style={{ fontSize: "0.95rem" }}>{PANEL_URL}</a>
        </div>
      </div>
    ),
  },
];

export default function Privacidad() {
  return (
    <div className="bg-[#F3EEE5] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#F3EEE5] border-b-4 border-[#111111]">
        <div className="section-inner" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <div
            className="inline-block border-2 border-[#111111] bg-[#ECE4D7] font-black uppercase tracking-widest text-xs"
            style={{ padding: "0.5rem 1.25rem", marginBottom: "1.5rem" }}
          >
            Legal
          </div>
          <h1
            className="font-black uppercase tracking-tighter text-[#111111] leading-none"
            style={{ fontSize: "clamp(44px, 7vw, 88px)", marginBottom: "1.5rem" }}
          >
            Política de<br />Privacidad
          </h1>
          <p className="text-[#666666] font-medium" style={{ fontSize: "0.9rem" }}>
            Última actualización: <strong className="text-[#111111]">{LAST_UPDATE}</strong>
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-[#F3EEE5]">
        <div className="section-inner" style={{ paddingTop: "0", paddingBottom: "5rem" }}>
          <div style={{ borderTop: "4px solid #111111" }}>
            {sections.map((section) => (
              <div key={section.num} style={{ borderBottom: "2px solid #ECE4D7", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
                <div className="grid" style={{ gridTemplateColumns: "3rem 1fr", gap: "1.5rem" }}>
                  <span className="font-black text-xs text-[#BBBBBB] tabular-nums pt-1">{section.num}</span>
                  <div>
                    <h2
                      className="font-black uppercase tracking-tight text-[#111111]"
                      style={{ fontSize: "clamp(14px, 2.5vw, 18px)", marginBottom: "1.25rem" }}
                    >
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
