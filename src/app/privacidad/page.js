import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Política de Privacidad — FaChat",
  description:
    "Política de Privacidad de FaChat. Conocé cómo recopilamos, usamos y protegemos tus datos personales.",
};

const LAST_UPDATE = "13 de marzo de 2026";
const COMPANY = "FaChat";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#060a12] text-gray-300">
      {/* Navbar mínima */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/favicon.png" alt="FaChat" width={30} height={30} className="rounded-xl" />
            <span className="text-white font-semibold text-lg tracking-tight">FaChat</span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 pb-24">
        {/* Encabezado */}
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

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              Responsable del Tratamiento de Datos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                El responsable del tratamiento de los datos personales es <strong className="text-gray-200">{COMPANY}</strong>,
                operando conforme a las leyes de la <strong className="text-gray-200">{COUNTRY}</strong>.
              </p>
              <p>
                Para ejercer tus derechos o realizar consultas sobre privacidad, podés contactarnos en:{" "}
                <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>.
              </p>
              <p>
                Esta política se aplica a todos los usuarios del sitio web de {COMPANY} y a todos los
                Clientes que contraten nuestros servicios. El término &ldquo;datos personales&rdquo; hace referencia
                a cualquier información que permita identificar directa o indirectamente a una persona física.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              Qué Datos Recopilamos
            </h2>
            <div className="space-y-5 text-gray-400 pl-10">

              <div>
                <h3 className="text-gray-200 font-semibold mb-2">2.1 Datos del Cliente (el negocio que contrata)</h3>
                <ul className="space-y-1.5 list-none">
                  {[
                    "Nombre completo o razón social del negocio.",
                    "Dirección de correo electrónico.",
                    "Número de teléfono de contacto.",
                    "Número de WhatsApp Business del negocio.",
                    "Información del negocio: nombre, dirección, ciudad, horarios, zona de cobertura.",
                    "Catálogo de productos o servicios con nombres, descripciones y precios.",
                    "Métodos de pago aceptados por el negocio.",
                    "Credenciales de acceso al panel web (contraseña almacenada con hash bcrypt, nunca en texto plano).",
                    "Historial de pagos y plan contratado.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-gray-200 font-semibold mb-2">2.2 Datos de los Usuarios Finales (clientes del negocio)</h3>
                <p className="mb-2">
                  Cuando un cliente final interactúa con el asistente virtual a través de WhatsApp,
                  {COMPANY} recibe y procesa la siguiente información en nombre del negocio:
                </p>
                <ul className="space-y-1.5 list-none">
                  {[
                    "Número de teléfono de WhatsApp del usuario final.",
                    "Nombre de perfil de WhatsApp (si está disponible).",
                    "Contenido de los mensajes intercambiados con el asistente virtual.",
                    "Mensajes de audio (que son transcritos y luego procesados para generar la respuesta).",
                    "Datos de los pedidos realizados: productos solicitados, dirección de entrega, método de pago elegido y monto.",
                    "Fecha, hora y duración de las conversaciones.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-gray-500 text-xs">
                  Nota: {COMPANY} actúa como encargado del tratamiento de estos datos en nombre del
                  Cliente (el negocio), quien es el responsable frente a sus propios clientes.
                </p>
              </div>

              <div>
                <h3 className="text-gray-200 font-semibold mb-2">2.3 Datos de Navegación (sitio web)</h3>
                <ul className="space-y-1.5 list-none">
                  {[
                    "Dirección IP del visitante.",
                    "Tipo y versión del navegador.",
                    "Sistema operativo.",
                    "Páginas visitadas y tiempo de permanencia.",
                    "URL de referencia (desde dónde llegaste al sitio).",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              Cómo y Por Qué Usamos los Datos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>Utilizamos los datos recopilados con las siguientes finalidades:</p>
              <div className="space-y-4">
                {[
                  {
                    title: "Prestación del servicio contratado",
                    desc: "Configurar y operar el asistente virtual, gestionar pedidos, procesar conversaciones y mantener el panel web funcionando correctamente.",
                    base: "Ejecución del contrato",
                  },
                  {
                    title: "Comunicaciones sobre el servicio",
                    desc: "Enviarte notificaciones técnicas, alertas de mantenimiento, actualizaciones relevantes del servicio y responder a tus consultas de soporte.",
                    base: "Interés legítimo / ejecución del contrato",
                  },
                  {
                    title: "Facturación y gestión de pagos",
                    desc: "Registrar y controlar los pagos realizados, emitir comprobantes y gestionar el estado de la suscripción.",
                    base: "Obligación legal / ejecución del contrato",
                  },
                  {
                    title: "Mejora del servicio",
                    desc: "Analizar patrones de uso de forma anonimizada para detectar errores, mejorar la experiencia del usuario y desarrollar nuevas funcionalidades.",
                    base: "Interés legítimo",
                  },
                  {
                    title: "Seguridad y prevención de fraude",
                    desc: "Detectar y prevenir accesos no autorizados, actividades fraudulentas o usos indebidos de la plataforma.",
                    base: "Interés legítimo / obligación legal",
                  },
                  {
                    title: "Cumplimiento legal",
                    desc: "Cumplir con obligaciones legales aplicables, como la conservación de ciertos registros exigida por la ley.",
                    base: "Obligación legal",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/3 border border-white/5 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <span className="text-gray-200 font-medium">{item.title}</span>
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full flex-shrink-0">{item.base}</span>
                    </div>
                    <p className="mt-1.5 text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p>
                <strong className="text-gray-200">No usamos tus datos para publicidad de terceros ni los vendemos bajo ninguna circunstancia.</strong>
              </p>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
              Con Quién Compartimos los Datos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                {COMPANY} no vende ni comercializa datos personales. Los datos pueden ser compartidos
                únicamente con los siguientes terceros y únicamente en la medida necesaria para prestar el servicio:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  {
                    who: "Meta Platforms (WhatsApp Business API)",
                    why: "Para la transmisión y recepción de mensajes de WhatsApp. Meta procesa los mensajes conforme a sus propias políticas de privacidad.",
                  },
                  {
                    who: "Proveedores de infraestructura cloud",
                    why: "Para el alojamiento de la plataforma, base de datos y servicios de almacenamiento. Estos proveedores actúan como encargados del tratamiento bajo acuerdos de confidencialidad.",
                  },
                  {
                    who: "Proveedores de modelos de IA",
                    why: "Para el procesamiento de mensajes y generación de respuestas del asistente virtual. Los mensajes son enviados a las APIs de modelos de lenguaje (ej. Groq/Llama) en forma cifrada.",
                  },
                  {
                    who: "Autoridades públicas",
                    why: "Únicamente cuando sea requerido por ley, orden judicial o autoridad competente.",
                  },
                ].map((item, i) => (
                  <li key={i} className="bg-white/3 border border-white/5 rounded-xl p-4">
                    <span className="text-gray-200 font-medium block mb-1">{item.who}</span>
                    <span className="text-gray-500 text-xs">{item.why}</span>
                  </li>
                ))}
              </ul>
              <p>
                En todos los casos, exigimos contractualmente a nuestros proveedores que protejan los
                datos con estándares de seguridad equivalentes o superiores a los nuestros.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
              Retención de Datos — Por Cuánto Tiempo los Guardamos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-300 font-semibold py-3 pr-6">Tipo de dato</th>
                      <th className="text-left text-gray-300 font-semibold py-3">Período de retención</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["Datos del Cliente (cuenta activa)", "Durante toda la vigencia del contrato + 30 días después de la baja"],
                      ["Historial de pedidos", "5 años (obligación fiscal/legal en Argentina)"],
                      ["Conversaciones de WhatsApp", "12 meses desde la fecha de la conversación"],
                      ["Logs de acceso al panel", "6 meses"],
                      ["Datos de facturación y pagos", "10 años (obligación contable/impositiva)"],
                      ["Datos de navegación web", "12 meses"],
                      ["Datos de usuarios finales (clientes del negocio)", "12 meses desde la última interacción"],
                    ].map(([type, period], i) => (
                      <tr key={i}>
                        <td className="py-3 pr-6 text-gray-400">{type}</td>
                        <td className="py-3 text-gray-500">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Una vez vencido el plazo de retención, los datos son eliminados de forma segura o
                anonimizados de manera irreversible.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
              Seguridad de los Datos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Implementamos medidas técnicas y organizativas adecuadas para proteger los datos contra
                acceso no autorizado, alteración, divulgación o destrucción. Entre las medidas aplicadas:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Cifrado de datos en tránsito mediante TLS/HTTPS en todas las comunicaciones.",
                  "Almacenamiento de contraseñas con hash bcrypt — nunca almacenamos contraseñas en texto plano.",
                  "Autenticación mediante JSON Web Tokens (JWT) con tiempo de expiración.",
                  "Acceso a la infraestructura restringido mediante autenticación por clave SSH.",
                  "Copias de seguridad periódicas de la base de datos.",
                  "Separación lógica de datos entre Clientes (multi-tenant con aislamiento por restaurante_id).",
                  "Monitoreo de accesos y registro de actividad.",
                  "Actualizaciones regulares de dependencias y parches de seguridad.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Si tomáramos conocimiento de una violación de seguridad que pudiera afectar tus datos,
                te notificaremos en un plazo máximo de <strong className="text-gray-200">72 horas</strong> a través del correo
                electrónico registrado en tu cuenta.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
              Tus Derechos — Ley 25.326 de Protección de Datos Personales
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                De acuerdo con la Ley N° 25.326 de la {COUNTRY} (Ley de Protección de Datos Personales)
                y su decreto reglamentario, tenés los siguientes derechos respecto de tus datos personales:
              </p>
              <div className="space-y-3">
                {[
                  {
                    right: "Derecho de Acceso",
                    desc: "Podés solicitar en cualquier momento información sobre qué datos tuyos tenemos almacenados, su origen y el uso que hacemos de ellos. Responderemos en un plazo máximo de 30 días.",
                  },
                  {
                    right: "Derecho de Rectificación",
                    desc: "Podés solicitar la corrección de datos incorrectos, inexactos o incompletos.",
                  },
                  {
                    right: "Derecho de Supresión",
                    desc: "Podés solicitar la eliminación de tus datos cuando ya no sean necesarios para la finalidad para la que fueron recopilados, salvo que exista obligación legal de conservarlos.",
                  },
                  {
                    right: "Derecho de Confidencialidad",
                    desc: "Tenés derecho a que tus datos sean tratados con confidencialidad y a oponerte a su cesión a terceros.",
                  },
                  {
                    right: "Derecho a la Portabilidad",
                    desc: "Podés solicitar una copia de tus datos en formato legible para transferirlos a otro servicio.",
                  },
                  {
                    right: "Derecho de Oposición",
                    desc: "Podés oponerte al tratamiento de tus datos con fines de marketing directo o cuando el tratamiento se base en el interés legítimo del Proveedor.",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/3 border border-white/5 rounded-xl p-4">
                    <span className="text-gray-200 font-semibold block mb-1">{item.right}</span>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p>
                Para ejercer cualquiera de estos derechos, enviá un email a{" "}
                <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>{" "}
                indicando tu nombre, la acción que querés ejercer y —si corresponde— los datos específicos
                a los que se refiere tu solicitud.
              </p>
              <p>
                También podés presentar una reclamación ante la <strong className="text-gray-200">Dirección Nacional de Protección
                de Datos Personales (DNPDP)</strong>, organismo de control en la {COUNTRY}, en caso de considerar
                que tus derechos no fueron atendidos correctamente.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">8</span>
              Cookies y Tecnologías de Seguimiento
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                El sitio web de {COMPANY} puede utilizar cookies técnicas y funcionales estrictamente
                necesarias para el funcionamiento del sitio y del panel web (como mantener la sesión activa).
                No utilizamos cookies de seguimiento publicitario ni compartimos datos de navegación con
                redes de publicidad.
              </p>
              <p>
                Podés configurar tu navegador para bloquear o eliminar cookies, aunque esto podría
                afectar el funcionamiento del panel web. Las cookies de sesión se eliminan automáticamente
                al cerrar el navegador o al transcurrir su tiempo de expiración (7 días).
              </p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">9</span>
              Transferencia Internacional de Datos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Algunos de nuestros proveedores de infraestructura y de modelos de inteligencia artificial
                pueden estar ubicados fuera de la {COUNTRY}. En estos casos, nos aseguramos de que
                los datos sean transferidos con las garantías adecuadas, exigiendo contractualmente a
                dichos proveedores el cumplimiento de estándares de protección equivalentes a los
                requeridos por la legislación argentina.
              </p>
              <p>
                En ningún caso los datos son transferidos a países que no ofrezcan un nivel de protección
                adecuado sin que medie una cláusula contractual específica que garantice su protección.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">10</span>
              Menores de Edad
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Los servicios de {COMPANY} están dirigidos exclusivamente a negocios y personas mayores
                de 18 años. No recopilamos intencionalmente datos personales de menores de edad. Si tomáramos
                conocimiento de que hemos recibido datos de un menor, procederemos a eliminarlos de inmediato.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">11</span>
              Cambios en esta Política
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en
                nuestras prácticas o en la legislación aplicable. Cuando realicemos cambios sustanciales,
                te notificaremos por correo electrónico con al menos <strong className="text-gray-200">15 días de anticipación</strong>.
              </p>
              <p>
                La versión vigente siempre estará disponible en{" "}
                <Link href="/privacidad" className="text-blue-400 hover:underline">fachat.com.ar/privacidad</Link>.
                La fecha de última actualización al inicio del documento indica cuándo fue modificada por última vez.
              </p>
            </div>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">12</span>
              Contacto y Ejercicio de Derechos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Para cualquier consulta, reclamo o ejercicio de tus derechos en materia de privacidad,
                contactanos en:
              </p>
              <div className="bg-white/3 border border-white/5 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider w-16 flex-shrink-0">Email</span>
                  <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider w-16 flex-shrink-0">Panel</span>
                  <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{PANEL_URL}</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider w-16 flex-shrink-0 mt-0.5">Respuesta</span>
                  <span>Respondemos en un plazo máximo de <strong className="text-gray-200">30 días corridos</strong> desde la recepción de tu solicitud, conforme lo establece la Ley N° 25.326.</span>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer de la página */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {COMPANY}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/terminos" className="hover:text-gray-400 transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Inicio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
