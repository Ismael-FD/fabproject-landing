import { Link } from "wouter";

const LAST_UPDATE = "13 de marzo de 2026";
const COMPANY = "FaChat";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[#060a12] text-gray-300">
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/favicon.png" alt="FaChat" width={30} height={30} className="rounded-xl" />
            <span className="text-white font-semibold text-lg tracking-tight">FaChat</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 pb-24">
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-500 text-sm">
            Última actualización: <span className="text-gray-400">{LAST_UPDATE}</span>
          </p>
          <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/15 rounded-2xl">
            <p className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Importante:</strong> Al contratar, acceder o utilizar los servicios de {COMPANY}, el Usuario acepta en su totalidad los presentes Términos y Condiciones.
            </p>
          </div>
        </div>

        <div className="space-y-12 text-sm leading-relaxed">
          {[
            {
              num: "1",
              title: "Partes del Acuerdo",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>El presente acuerdo se celebra entre <strong className="text-gray-200">{COMPANY}</strong> (en adelante &ldquo;el Proveedor&rdquo;) y la persona física o jurídica que contrata o utiliza el servicio (en adelante &ldquo;el Usuario&rdquo;).</p>
                  <p>El Proveedor opera bajo las leyes de la <strong className="text-gray-200">{COUNTRY}</strong>.</p>
                </div>
              ),
            },
            {
              num: "2",
              title: "Descripción del Servicio",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>{COMPANY} provee un servicio de asistente virtual basado en inteligencia artificial para negocios que operan a través de WhatsApp Business. El servicio incluye un panel de gestión web, atención automatizada de consultas, procesamiento de pedidos y reportes de actividad.</p>
                </div>
              ),
            },
            {
              num: "3",
              title: "Contratación y Precio",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>Los precios vigentes son los publicados en el sitio web al momento de la contratación. El pago se realiza de forma mensual por adelantado. {COMPANY} se reserva el derecho de modificar los precios con un preaviso mínimo de 30 días.</p>
                </div>
              ),
            },
            {
              num: "4",
              title: "Obligaciones del Cliente",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <ul className="space-y-2 list-none">
                    {["Proporcionar información veraz y actualizada.", "Mantener la confidencialidad de sus credenciales de acceso.", "Utilizar el servicio conforme a las leyes vigentes.", "Mantener actualizado su catálogo de productos y servicios.", "Notificar cualquier uso no autorizado de su cuenta."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              num: "5",
              title: "Obligaciones del Proveedor",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>{COMPANY} se compromete a prestar el servicio con una disponibilidad objetivo del 99%, a proveer soporte técnico según el plan contratado, y a mantener la confidencialidad de los datos del Cliente.</p>
                </div>
              ),
            },
            {
              num: "6",
              title: "Limitación de Responsabilidad",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>{COMPANY} no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio. La responsabilidad máxima del Proveedor se limita al monto abonado por el Cliente en los últimos 3 meses.</p>
                </div>
              ),
            },
            {
              num: "7",
              title: "Conductas Prohibidas",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <ul className="space-y-2 list-none">
                    {["Usar el servicio para actividades ilegales o fraudulentas.", "Intentar acceder sin autorización a sistemas del Proveedor.", "Enviar spam o comunicaciones masivas no solicitadas.", "Suplantar la identidad de otras personas o entidades.", "Revender el servicio sin autorización expresa del Proveedor."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              num: "8",
              title: "Vigencia y Cancelación",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>El servicio se contrata por períodos mensuales renovables automáticamente. Cualquiera de las partes puede cancelar sin expresión de causa con 30 días de preaviso. Ante cancelación, el Cliente tiene derecho a exportar sus datos dentro de los 30 días posteriores a la baja.</p>
                </div>
              ),
            },
            {
              num: "9",
              title: "Inteligencia Artificial — Alcance y Limitaciones",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>El asistente virtual utiliza modelos de IA de terceros. El Cliente reconoce que los modelos pueden generar respuestas incorrectas en circunstancias excepcionales y es responsable de monitorear periódicamente las conversaciones.</p>
                </div>
              ),
            },
            {
              num: "10",
              title: "Modificaciones a los Términos",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>{COMPANY} se reserva el derecho de modificar estos Términos con un preaviso mínimo de <strong className="text-gray-200">15 días corridos</strong> mediante correo electrónico. Si el Cliente continúa utilizando el servicio luego de la fecha de vigencia, se considerará que los ha aceptado.</p>
                </div>
              ),
            },
            {
              num: "11",
              title: "Ley Aplicable y Jurisdicción",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>Estos Términos se rigen por las leyes de la <strong className="text-gray-200">{COUNTRY}</strong>. Para la resolución de controversias, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes de la {COUNTRY}.</p>
                </div>
              ),
            },
            {
              num: "12",
              title: "Contacto",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span><strong className="text-gray-200">Email:</strong> <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a></span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span><strong className="text-gray-200">Panel:</strong> <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{PANEL_URL}</a></span></li>
                  </ul>
                </div>
              ),
            },
          ].map((section) => (
            <section key={section.num}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">{section.num}</span>
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} {COMPANY}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/privacidad" className="hover:text-gray-400 transition-colors">Política de Privacidad</Link>
            <Link href="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
