import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LAST_UPDATE = "13 de marzo de 2026";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

const sections = [
  {
    num: "01",
    title: "Partes del Acuerdo",
    content: (
      <div className="space-y-3 text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>
        <p>El presente acuerdo se celebra entre <strong className="text-[#111111]">FaChat</strong> (en adelante "el Proveedor") y la persona física o jurídica que contrata o utiliza el servicio (en adelante "el Usuario").</p>
        <p>El Proveedor opera bajo las leyes de la <strong className="text-[#111111]">{COUNTRY}</strong>.</p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Descripción del Servicio",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>FaChat provee un servicio de asistente virtual basado en inteligencia artificial para negocios que operan a través de WhatsApp Business. El servicio incluye un panel de gestión web, atención automatizada de consultas, procesamiento de pedidos y reportes de actividad.</p>
    ),
  },
  {
    num: "03",
    title: "Contratación y Precio",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>Los precios vigentes son los publicados en el sitio web al momento de la contratación. El pago se realiza de forma mensual por adelantado. FaChat se reserva el derecho de modificar los precios con un preaviso mínimo de 30 días.</p>
    ),
  },
  {
    num: "04",
    title: "Obligaciones del Cliente",
    content: (
      <ul className="space-y-2 text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>
        {["Proporcionar información veraz y actualizada.", "Mantener la confidencialidad de sus credenciales de acceso.", "Utilizar el servicio conforme a las leyes vigentes.", "Mantener actualizado su catálogo de productos y servicios.", "Notificar cualquier uso no autorizado de su cuenta."].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "05",
    title: "Obligaciones del Proveedor",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>FaChat se compromete a prestar el servicio con una disponibilidad objetivo del 99%, a proveer soporte técnico según el plan contratado, y a mantener la confidencialidad de los datos del Cliente.</p>
    ),
  },
  {
    num: "06",
    title: "Limitación de Responsabilidad",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>FaChat no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio. La responsabilidad máxima del Proveedor se limita al monto abonado por el Cliente en los últimos 3 meses.</p>
    ),
  },
  {
    num: "07",
    title: "Conductas Prohibidas",
    content: (
      <ul className="space-y-2 text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>
        {["Usar el servicio para actividades ilegales o fraudulentas.", "Intentar acceder sin autorización a sistemas del Proveedor.", "Enviar spam o comunicaciones masivas no solicitadas.", "Suplantar la identidad de otras personas o entidades.", "Revender el servicio sin autorización expresa del Proveedor."].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 bg-[#111111] flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "08",
    title: "Vigencia y Cancelación",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>El servicio se contrata por períodos mensuales renovables automáticamente. Cualquiera de las partes puede cancelar sin expresión de causa con 30 días de preaviso. Ante cancelación, el Cliente tiene derecho a exportar sus datos dentro de los 30 días posteriores a la baja.</p>
    ),
  },
  {
    num: "09",
    title: "Inteligencia Artificial — Alcance y Limitaciones",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>El asistente virtual utiliza modelos de IA de terceros. El Cliente reconoce que los modelos pueden generar respuestas incorrectas en circunstancias excepcionales y es responsable de monitorear periódicamente las conversaciones.</p>
    ),
  },
  {
    num: "10",
    title: "Modificaciones a los Términos",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>FaChat se reserva el derecho de modificar estos Términos con un preaviso mínimo de <strong className="text-[#111111]">15 días corridos</strong> mediante correo electrónico. Si el Cliente continúa utilizando el servicio luego de la fecha de vigencia, se considerará que los ha aceptado.</p>
    ),
  },
  {
    num: "11",
    title: "Ley Aplicable y Jurisdicción",
    content: (
      <p className="text-[#666666] leading-relaxed" style={{ fontSize: "1.1rem" }}>Estos Términos se rigen por las leyes de la <strong className="text-[#111111]">{COUNTRY}</strong>. Para la resolución de controversias, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes de la {COUNTRY}.</p>
    ),
  },
  {
    num: "12",
    title: "Contacto",
    content: (
      <div
        className="border-4 border-[#111111] bg-white"
        style={{ padding: "2rem", boxShadow: "6px 6px 0px 0px #111111" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6" style={{ marginBottom: "1.25rem" }}>
          <span className="font-black text-xs uppercase tracking-widest text-[#111111] sm:w-16 flex-shrink-0">Email</span>
          <a href={`mailto:${EMAIL_LEGAL}`} className="text-[#666666] font-medium hover:text-[#111111] transition-colors break-all" style={{ fontSize: "1.1rem" }}>{EMAIL_LEGAL}</a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6" style={{ paddingTop: "1.25rem", borderTop: "2px solid #ECE4D7" }}>
          <span className="font-black text-xs uppercase tracking-widest text-[#111111] sm:w-16 flex-shrink-0">Panel</span>
          <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-[#666666] font-medium hover:text-[#111111] transition-colors break-all" style={{ fontSize: "1.1rem" }}>{PANEL_URL}</a>
        </div>
      </div>
    ),
  },
];

export default function Terminos() {
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
            Términos y<br />Condiciones
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
                      style={{ fontSize: "clamp(16px, 2.5vw, 22px)", marginBottom: "1.25rem" }}
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
