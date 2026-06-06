import { Link } from "wouter";

const LAST_UPDATE = "13 de marzo de 2026";
const COMPANY = "FaChat";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

const sections = [
  {
    num: "01",
    title: "Responsable del Tratamiento de Datos",
    content: (
      <div className="space-y-3 text-[#555555] leading-relaxed text-sm">
        <p>El responsable del tratamiento de los datos personales es <strong className="text-[#111111]">{COMPANY}</strong>, operando conforme a las leyes de la <strong className="text-[#111111]">{COUNTRY}</strong>.</p>
        <p>Para ejercer tus derechos o realizar consultas sobre privacidad, contactanos en: <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#111111] font-bold underline underline-offset-2">{EMAIL_LEGAL}</a>.</p>
        <p>Esta política se aplica a todos los usuarios del sitio web de {COMPANY} y a todos los Clientes que contraten nuestros servicios.</p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Qué Datos Recopilamos",
    content: (
      <div className="space-y-5 text-[#555555] leading-relaxed text-sm">
        <div>
          <h3 className="text-[#111111] font-bold text-xs uppercase tracking-widest mb-3">2.1 Datos del Cliente</h3>
          <ul className="space-y-2">
            {["Nombre completo o razón social del negocio.", "Dirección de correo electrónico.", "Número de teléfono de contacto.", "Número de WhatsApp Business del negocio.", "Catálogo de productos o servicios con nombres, descripciones y precios.", "Credenciales de acceso al panel web (contraseña almacenada con hash, nunca en texto plano).", "Historial de pagos y plan contratado."].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#111111] rounded-none flex-shrink-0" /><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[#111111] font-bold text-xs uppercase tracking-widest mb-3">2.2 Datos de los Usuarios Finales</h3>
          <ul className="space-y-2">
            {["Número de teléfono de WhatsApp del usuario final.", "Nombre de perfil de WhatsApp.", "Contenido de los mensajes intercambiados con el asistente virtual.", "Datos de los pedidos realizados.", "Fecha, hora y duración de las conversaciones."].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#111111] rounded-none flex-shrink-0" /><span>{item}</span></li>
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
      <div className="space-y-3 text-[#555555] leading-relaxed text-sm">
        <p>Utilizamos los datos recopilados exclusivamente para las siguientes finalidades:</p>
        <ul className="space-y-2">
          {["Prestar el servicio de asistente virtual de WhatsApp.", "Gestionar la relación comercial con el Cliente.", "Procesar pedidos y reservas realizados a través del asistente.", "Mejorar el servicio y el rendimiento del asistente.", "Cumplir con obligaciones legales y fiscales."].map((item, i) => (
            <li key={i} className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#111111] rounded-none flex-shrink-0" /><span>{item}</span></li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: "04",
    title: "Compartición de Datos con Terceros",
    content: (
      <p className="text-[#555555] leading-relaxed text-sm">{COMPANY} no vende ni alquila datos personales a terceros. Podemos compartir datos únicamente con proveedores de infraestructura y servicios necesarios para el funcionamiento del sistema, siempre bajo acuerdos de confidencialidad.</p>
    ),
  },
  {
    num: "05",
    title: "Conservación de los Datos",
    content: (
      <p className="text-[#555555] leading-relaxed text-sm">Los datos se conservan durante la vigencia del contrato y por un período adicional de 2 años para cumplir con obligaciones legales. Tras ese período, los datos son eliminados o anonimizados de manera irreversible.</p>
    ),
  },
  {
    num: "06",
    title: "Seguridad de los Datos",
    content: (
      <ul className="space-y-2 text-[#555555] leading-relaxed text-sm">
        {["Cifrado de datos en tránsito mediante TLS/HTTPS.", "Almacenamiento de contraseñas con hash bcrypt.", "Autenticación mediante JWT con tiempo de expiración.", "Acceso restringido mediante autenticación por clave SSH.", "Copias de seguridad periódicas de la base de datos."].map((item, i) => (
          <li key={i} className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 bg-[#111111] rounded-none flex-shrink-0" /><span>{item}</span></li>
        ))}
      </ul>
    ),
  },
  {
    num: "07",
    title: "Tus Derechos — Ley 25.326",
    content: (
      <p className="text-[#555555] leading-relaxed text-sm">De acuerdo con la Ley N° 25.326 de la {COUNTRY}, tenés derecho a acceder, rectificar, suprimir, y oponerte al tratamiento de tus datos personales. Para ejercer cualquiera de estos derechos, enviá un email a <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#111111] font-bold underline underline-offset-2">{EMAIL_LEGAL}</a>.</p>
    ),
  },
  {
    num: "08",
    title: "Cookies y Tecnologías de Seguimiento",
    content: (
      <p className="text-[#555555] leading-relaxed text-sm">El sitio web puede utilizar cookies técnicas estrictamente necesarias para el funcionamiento. No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegación con redes de publicidad.</p>
    ),
  },
  {
    num: "09",
    title: "Cambios en esta Política",
    content: (
      <p className="text-[#555555] leading-relaxed text-sm">Podemos actualizar esta Política periódicamente. Cuando realicemos cambios sustanciales, te notificaremos por correo electrónico con al menos <strong className="text-[#111111]">15 días de anticipación</strong>.</p>
    ),
  },
  {
    num: "10",
    title: "Contacto y Ejercicio de Derechos",
    content: (
      <div className="bg-[#ECE4D7] p-5 space-y-4 text-sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#111111] sm:w-12 flex-shrink-0">Email</span>
          <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#111111] font-semibold underline underline-offset-2 break-all">{EMAIL_LEGAL}</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pt-3 border-t border-[#111111]/20">
          <span className="text-xs font-black uppercase tracking-widest text-[#111111] sm:w-12 flex-shrink-0">Panel</span>
          <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-[#111111] font-semibold underline underline-offset-2 break-all">{PANEL_URL}</a>
        </div>
      </div>
    ),
  },
];

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[#F3EEE5] text-[#111111]">
      {/* Header */}
      <header className="border-b-4 border-[#111111] bg-[#F3EEE5]">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="font-black text-2xl tracking-tighter text-[#111111]">
            FaChat
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#666666] hover:text-[#111111] transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14 pb-24">
        {/* Hero */}
        <div className="mb-14">
          <span className="text-xs font-black tracking-widest uppercase text-[#666666] mb-4 block">
            Legal
          </span>
          <h1 className="font-black uppercase tracking-tighter text-[#111111] mb-5 leading-none"
            style={{ fontSize: "clamp(38px, 8vw, 64px)" }}>
            Política de<br />Privacidad
          </h1>
          <p className="text-[#666666] text-sm font-medium">
            Última actualización: <strong className="text-[#111111]">{LAST_UPDATE}</strong>
          </p>
          <div className="mt-6 border-l-4 border-[#111111] pl-5">
            <p className="text-sm text-[#666666] leading-relaxed">
              En <strong className="text-[#111111]">{COMPANY}</strong> nos tomamos muy en serio la privacidad de las personas. Esta Política describe qué datos recopilamos, cómo los usamos, con quién los compartimos y cuáles son tus derechos al respecto.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          {sections.map((section) => (
            <section key={section.num} className="border-t-2 border-[#111111]/15 py-10">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-xs font-black text-[#BBBBBB] flex-shrink-0 tabular-nums">{section.num}</span>
                <h2 className="font-black uppercase tracking-tight text-[#111111]"
                  style={{ fontSize: "clamp(14px, 3vw, 17px)" }}>
                  {section.title}
                </h2>
              </div>
              <div className="pl-7">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t-4 border-[#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#999999] text-xs">© {new Date().getFullYear()} {COMPANY}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-xs font-semibold">
            <Link href="/terminos" className="text-[#666666] hover:text-[#111111] transition-colors">Términos y Condiciones</Link>
            <Link href="/" className="text-[#666666] hover:text-[#111111] transition-colors">Inicio</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
