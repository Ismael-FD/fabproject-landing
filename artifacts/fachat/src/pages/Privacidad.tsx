import { Link } from "wouter";

const LAST_UPDATE = "13 de marzo de 2026";
const COMPANY = "FaChat";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

export default function Privacidad() {
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
            Política de Privacidad
          </h1>
          <p className="text-gray-500 text-sm">
            Última actualización: <span className="text-gray-400">{LAST_UPDATE}</span>
          </p>
          <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/15 rounded-2xl">
            <p className="text-sm text-gray-400 leading-relaxed">
              En <strong className="text-gray-200">{COMPANY}</strong> nos tomamos muy en serio la privacidad de las personas.
              Esta Política describe qué datos recopilamos, cómo los usamos, con quién los compartimos y
              cuáles son tus derechos al respecto. La redactamos en términos claros porque creemos que
              tenés derecho a entender exactamente qué hacemos con tu información.
            </p>
          </div>
        </div>

        <div className="space-y-12 text-sm leading-relaxed">
          {[
            {
              num: "1",
              title: "Responsable del Tratamiento de Datos",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>El responsable del tratamiento de los datos personales es <strong className="text-gray-200">{COMPANY}</strong>, operando conforme a las leyes de la <strong className="text-gray-200">{COUNTRY}</strong>.</p>
                  <p>Para ejercer tus derechos o realizar consultas sobre privacidad, podés contactarnos en: <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>.</p>
                  <p>Esta política se aplica a todos los usuarios del sitio web de {COMPANY} y a todos los Clientes que contraten nuestros servicios.</p>
                </div>
              ),
            },
            {
              num: "2",
              title: "Qué Datos Recopilamos",
              content: (
                <div className="space-y-5 text-gray-400 pl-10">
                  <div>
                    <h3 className="text-gray-200 font-semibold mb-2">2.1 Datos del Cliente (el negocio que contrata)</h3>
                    <ul className="space-y-1.5 list-none">
                      {["Nombre completo o razón social del negocio.", "Dirección de correo electrónico.", "Número de teléfono de contacto.", "Número de WhatsApp Business del negocio.", "Catálogo de productos o servicios con nombres, descripciones y precios.", "Credenciales de acceso al panel web (contraseña almacenada con hash bcrypt, nunca en texto plano).", "Historial de pagos y plan contratado."].map((item, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-gray-200 font-semibold mb-2">2.2 Datos de los Usuarios Finales</h3>
                    <ul className="space-y-1.5 list-none">
                      {["Número de teléfono de WhatsApp del usuario final.", "Nombre de perfil de WhatsApp.", "Contenido de los mensajes intercambiados con el asistente virtual.", "Datos de los pedidos realizados.", "Fecha, hora y duración de las conversaciones."].map((item, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span>{item}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              num: "3",
              title: "Cómo Usamos los Datos",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>Utilizamos los datos recopilados exclusivamente para las siguientes finalidades:</p>
                  <ul className="space-y-1.5 list-none">
                    {["Prestar el servicio de asistente virtual de WhatsApp.", "Gestionar la relación comercial con el Cliente.", "Procesar pedidos y reservas realizados a través del asistente.", "Mejorar el servicio y el rendimiento del asistente.", "Cumplir con obligaciones legales y fiscales."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              num: "4",
              title: "Compartición de Datos con Terceros",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>{COMPANY} no vende ni alquila datos personales a terceros. Podemos compartir datos únicamente con proveedores de infraestructura y servicios necesarios para el funcionamiento del sistema, siempre bajo acuerdos de confidencialidad.</p>
                </div>
              ),
            },
            {
              num: "5",
              title: "Conservación de los Datos",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>Los datos se conservan durante la vigencia del contrato y por un período adicional de 2 años para cumplir con obligaciones legales. Tras ese período, los datos son eliminados o anonimizados de manera irreversible.</p>
                </div>
              ),
            },
            {
              num: "6",
              title: "Seguridad de los Datos",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <ul className="space-y-2 list-none">
                    {["Cifrado de datos en tránsito mediante TLS/HTTPS.", "Almacenamiento de contraseñas con hash bcrypt.", "Autenticación mediante JWT con tiempo de expiración.", "Acceso restringido mediante autenticación por clave SSH.", "Copias de seguridad periódicas de la base de datos."].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-green-400 mt-0.5 flex-shrink-0">✓</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ),
            },
            {
              num: "7",
              title: "Tus Derechos — Ley 25.326 de Protección de Datos Personales",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>De acuerdo con la Ley N° 25.326 de la {COUNTRY}, tenés derecho a acceder, rectificar, suprimir, y oponerte al tratamiento de tus datos personales. Para ejercer cualquiera de estos derechos, enviá un email a <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>.</p>
                </div>
              ),
            },
            {
              num: "8",
              title: "Cookies y Tecnologías de Seguimiento",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>El sitio web puede utilizar cookies técnicas estrictamente necesarias para el funcionamiento. No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegación con redes de publicidad.</p>
                </div>
              ),
            },
            {
              num: "9",
              title: "Cambios en esta Política",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <p>Podemos actualizar esta Política periódicamente. Cuando realicemos cambios sustanciales, te notificaremos por correo electrónico con al menos <strong className="text-gray-200">15 días de anticipación</strong>.</p>
                </div>
              ),
            },
            {
              num: "10",
              title: "Contacto y Ejercicio de Derechos",
              content: (
                <div className="space-y-3 text-gray-400 pl-10">
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider w-16 flex-shrink-0">Email</span>
                      <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider w-16 flex-shrink-0">Panel</span>
                      <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{PANEL_URL}</a>
                    </div>
                  </div>
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
            <Link href="/terminos" className="hover:text-gray-400 transition-colors">Términos y Condiciones</Link>
            <Link href="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
