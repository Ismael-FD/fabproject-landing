import { Link } from "wouter";

const LAST_UPDATE = "13 de marzo de 2026";
const COMPANY = "FaChat";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

const sections = [
  {
    num: "01",
    title: "Partes del Acuerdo",
    content: (
      <div className="space-y-3 text-[#555555] leading-relaxed">
        <p>El presente acuerdo se celebra entre <strong className="text-[#111111]">{COMPANY}</strong> (en adelante &ldquo;el Proveedor&rdquo;) y la persona física o jurídica que contrata o utiliza el servicio (en adelante &ldquo;el Usuario&rdquo;).</p>
        <p>El Proveedor opera bajo las leyes de la <strong className="text-[#111111]">{COUNTRY}</strong>.</p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Descripción del Servicio",
    content: (
      <p className="text-[#555555] leading-relaxed">{COMPANY} provee un servicio de asistente virtual basado en inteligencia artificial para negocios que operan a través de WhatsApp Business. El servicio incluye un panel de gestión web, atención automatizada de consultas, procesamiento de pedidos y reportes de actividad.</p>
    ),
  },
  {
    num: "03",
    title: "Contratación y Precio",
    content: (
      <p className="text-[#555555] leading-relaxed">Los precios vigentes son los publicados en el sitio web al momento de la contratación. El pago se realiza de forma mensual por adelantado. {COMPANY} se reserva el derecho de modificar los precios con un preaviso mínimo de 30 días.</p>
    ),
  },
  {
    num: "04",
    title: "Obligaciones del Cliente",
    content: (
      <ul className="space-y-2 text-[#555555] leading-relaxed">
        {["Proporcionar información veraz y actualizada.", "Mantener la confidencialidad de sus credenciales de acceso.", "Utilizar el servicio conforme a las leyes vigentes.", "Mantener actualizado su catálogo de productos y servicios.", "Notificar cualquier uso no autorizado de su cuenta."].map((item, i) => (
          <li key={i} className="flex items-start gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" /><span>{item}</span></li>
        ))}
      </ul>
    ),
  },
  {
    num: "05",
    title: "Obligaciones del Proveedor",
    content: (
      <p className="text-[#555555] leading-relaxed">{COMPANY} se compromete a prestar el servicio con una disponibilidad objetivo del 99%, a proveer soporte técnico según el plan contratado, y a mantener la confidencialidad de los datos del Cliente.</p>
    ),
  },
  {
    num: "06",
    title: "Limitación de Responsabilidad",
    content: (
      <p className="text-[#555555] leading-relaxed">{COMPANY} no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio. La responsabilidad máxima del Proveedor se limita al monto abonado por el Cliente en los últimos 3 meses.</p>
    ),
  },
  {
    num: "07",
    title: "Conductas Prohibidas",
    content: (
      <ul className="space-y-2 text-[#555555] leading-relaxed">
        {["Usar el servicio para actividades ilegales o fraudulentas.", "Intentar acceder sin autorización a sistemas del Proveedor.", "Enviar spam o comunicaciones masivas no solicitadas.", "Suplantar la identidad de otras personas o entidades.", "Revender el servicio sin autorización expresa del Proveedor."].map((item, i) => (
          <li key={i} className="flex items-start gap-2.5"><span className="mt-1.5 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" /><span>{item}</span></li>
        ))}
      </ul>
    ),
  },
  {
    num: "08",
    title: "Vigencia y Cancelación",
    content: (
      <p className="text-[#555555] leading-relaxed">El servicio se contrata por períodos mensuales renovables automáticamente. Cualquiera de las partes puede cancelar sin expresión de causa con 30 días de preaviso. Ante cancelación, el Cliente tiene derecho a exportar sus datos dentro de los 30 días posteriores a la baja.</p>
    ),
  },
  {
    num: "09",
    title: "Inteligencia Artificial — Alcance y Limitaciones",
    content: (
      <p className="text-[#555555] leading-relaxed">El asistente virtual utiliza modelos de IA de terceros. El Cliente reconoce que los modelos pueden generar respuestas incorrectas en circunstancias excepcionales y es responsable de monitorear periódicamente las conversaciones.</p>
    ),
  },
  {
    num: "10",
    title: "Modificaciones a los Términos",
    content: (
      <p className="text-[#555555] leading-relaxed">{COMPANY} se reserva el derecho de modificar estos Términos con un preaviso mínimo de <strong className="text-[#111111]">15 días corridos</strong> mediante correo electrónico. Si el Cliente continúa utilizando el servicio luego de la fecha de vigencia, se considerará que los ha aceptado.</p>
    ),
  },
  {
    num: "11",
    title: "Ley Aplicable y Jurisdicción",
    content: (
      <p className="text-[#555555] leading-relaxed">Estos Términos se rigen por las leyes de la <strong className="text-[#111111]">{COUNTRY}</strong>. Para la resolución de controversias, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes de la {COUNTRY}.</p>
    ),
  },
  {
    num: "12",
    title: "Contacto",
    content: (
      <div className="border-2 border-[#111111] p-5 space-y-3">
        <div className="flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#111111] w-12 flex-shrink-0">Email</span>
          <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#111111] font-bold underline underline-offset-2 text-sm">{EMAIL_LEGAL}</a>
        </div>
        <div className="border-t-2 border-[#111111] pt-3 flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#111111] w-12 flex-shrink-0">Panel</span>
          <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-[#111111] font-bold underline underline-offset-2 text-sm break-all">{PANEL_URL}</a>
        </div>
      </div>
    ),
  },
];

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[#F3EEE5] text-[#111111]">
      <header className="border-b-4 border-[#111111] px-6 bg-[#F3EEE5]">
        <div className="max-w-4xl mx-auto flex items-center justify-between h-20">
          <Link href="/" className="font-black text-2xl tracking-tighter text-[#111111]">
            FaChat
          </Link>
          <Link href="/"
            className="text-sm font-bold text-[#111111] border-2 border-[#111111] px-4 py-2 hover:bg-[#111111] hover:text-[#F3EEE5] transition-colors">
            ← Inicio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 pb-24">
        <div className="mb-14 border-b-4 border-[#111111] pb-10">
          <span className="inline-block text-xs font-black tracking-widest uppercase border-2 border-[#111111] px-3 py-1 mb-5">
            Legal
          </span>
          <h1 className="font-black uppercase tracking-tighter text-[#111111] mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 0.95 }}>
            TÉRMINOS Y<br />CONDICIONES
          </h1>
          <p className="text-[#666666] text-sm font-medium mt-6">
            Última actualización: <strong className="text-[#111111]">{LAST_UPDATE}</strong>
          </p>
          <div className="mt-6 border-l-4 border-[#111111] pl-5">
            <p className="text-sm text-[#555555] leading-relaxed">
              <strong className="text-[#111111]">Importante:</strong> Al contratar, acceder o utilizar los servicios de {COMPANY}, el Usuario acepta en su totalidad los presentes Términos y Condiciones.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.num} className="border-b-2 border-[#111111]/20 pb-10">
              <h2 className="font-black uppercase tracking-tighter text-[#111111] mb-5 flex items-start gap-4">
                <span className="text-xs font-black text-[#666666] mt-1 flex-shrink-0 w-8">{section.num}</span>
                <span style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>{section.title}</span>
              </h2>
              <div className="pl-12 text-sm">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-4 border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#666666] text-xs font-medium">© {new Date().getFullYear()} {COMPANY}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-xs font-bold">
            <Link href="/privacidad" className="text-[#111111] hover:text-[#666666] transition-colors">Política de Privacidad</Link>
            <Link href="/" className="text-[#111111] hover:text-[#666666] transition-colors">Inicio</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
