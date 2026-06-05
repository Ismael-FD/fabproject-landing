import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Términos y Condiciones — FaChat",
  description:
    "Términos y Condiciones de uso del servicio FaChat. Leé con atención antes de contratar o utilizar nuestros servicios.",
};

const LAST_UPDATE = "13 de marzo de 2026";
const COMPANY = "FaChat";
const EMAIL_LEGAL = "fabri.ab@hotmail.com";
const COUNTRY = "República Argentina";
const PANEL_URL = "https://fabproject-panel.vercel.app/";

export default function TerminosPage() {
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
            Términos y Condiciones
          </h1>
          <p className="text-gray-500 text-sm">
            Última actualización: <span className="text-gray-400">{LAST_UPDATE}</span>
          </p>
          <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/15 rounded-2xl">
            <p className="text-sm text-gray-400 leading-relaxed">
              <strong className="text-gray-200">Importante:</strong> Al contratar, acceder o utilizar los servicios de {COMPANY}, el Usuario
              acepta en su totalidad los presentes Términos y Condiciones. Si no estás de acuerdo con
              alguna de las disposiciones aquí establecidas, no debés utilizar el servicio.
            </p>
          </div>
        </div>

        <div className="space-y-12 text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              Partes del Acuerdo
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                El presente acuerdo se celebra entre <strong className="text-gray-200">{COMPANY}</strong> (en adelante
                &ldquo;el Proveedor&rdquo;, &ldquo;nosotros&rdquo; o &ldquo;FaChat&rdquo;), titular del servicio, y la persona física o jurídica
                que contrata o utiliza el servicio (en adelante &ldquo;el Usuario&rdquo;, &ldquo;el Cliente&rdquo; o &ldquo;vos&rdquo;).
              </p>
              <p>
                El Proveedor opera bajo las leyes de la <strong className="text-gray-200">{COUNTRY}</strong> y presta servicios
                de automatización de atención al cliente mediante asistentes virtuales basados en inteligencia
                artificial integrados a la plataforma WhatsApp Business.
              </p>
              <p>
                Para consultas legales y notificaciones formales, el Proveedor puede ser contactado en:
                <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline ml-1">{EMAIL_LEGAL}</a>.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              Descripción del Servicio
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                {COMPANY} provee una plataforma SaaS (Software como Servicio) que permite a negocios de
                cualquier rubro desplegar un asistente virtual basado en inteligencia artificial en su
                número de WhatsApp Business. El servicio incluye, sin limitarse a:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Asistente virtual de atención al cliente en WhatsApp, operativo las 24 horas del día, los 7 días de la semana.",
                  "Recepción, registro y gestión de pedidos o consultas entrantes.",
                  "Panel web de administración propio donde el Cliente puede visualizar pedidos, métricas, y gestionar su catálogo de productos o servicios.",
                  "Configuración personalizada del asistente: nombre del bot, tono de comunicación, horarios de atención, zona de cobertura y métodos de pago.",
                  "Derivación de conversaciones a un operador humano cuando el Cliente lo requiera o cuando la situación lo amerite.",
                  "Transcripción de mensajes de audio recibidos por WhatsApp.",
                  "Registro histórico de conversaciones y estadísticas de uso.",
                  "Soporte técnico básico incluido en todos los planes.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                El servicio requiere que el Cliente cuente con un número de WhatsApp Business activo y
                registrado en Meta for Developers (anteriormente Facebook). {COMPANY} asiste en el proceso
                de configuración inicial, pero el número de teléfono y la cuenta de Meta permanecen en
                titularidad del Cliente.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              Planes, Precios y Facturación
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Los precios vigentes están publicados en la sección &ldquo;Precios&rdquo; de la landing page de {COMPANY}.
                Todos los montos se expresan en <strong className="text-gray-200">pesos argentinos (ARS)</strong> e incluyen
                los impuestos que correspondan según la legislación vigente.
              </p>
              <p>
                <strong className="text-gray-200">Modalidad de cobro:</strong> La suscripción se abona de forma mensual por adelantado.
                La fecha de renovación coincide con el día del mes en que se realizó el primer pago.
              </p>
              <p>
                <strong className="text-gray-200">Medios de pago aceptados:</strong> El Proveedor acepta transferencia bancaria,
                pago por alias CBU/CVU y los medios de pago habilitados que se informen al momento de la contratación.
              </p>
              <p>
                <strong className="text-gray-200">Modificación de precios:</strong> {COMPANY} se reserva el derecho de modificar
                sus precios con un preaviso mínimo de <strong className="text-gray-200">30 días corridos</strong> informado
                por correo electrónico al Cliente. Si el Cliente no acepta el nuevo precio, podrá dar de baja
                el servicio sin penalidad antes de la fecha de vigencia del cambio.
              </p>
              <p>
                <strong className="text-gray-200">Falta de pago:</strong> En caso de que el pago no sea acreditado dentro de los
                5 días hábiles posteriores al vencimiento, el Proveedor podrá suspender el servicio de forma
                preventiva hasta regularizar la situación. La suspensión no genera derecho a descuento o crédito
                sobre el período afectado.
              </p>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
              Obligaciones del Cliente
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>Al contratar el servicio, el Cliente se compromete a:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Proveer información veraz, completa y actualizada al momento del alta y durante toda la vigencia del contrato.",
                  "Mantener la confidencialidad de las credenciales de acceso al panel web. El Cliente es responsable de toda actividad que ocurra bajo su cuenta.",
                  "Utilizar el servicio únicamente para fines lícitos y de conformidad con las políticas de uso de WhatsApp Business de Meta Platforms Inc.",
                  "No utilizar el servicio para enviar mensajes no solicitados (spam), contenido engañoso, ilegal, ofensivo, discriminatorio o que infrinja derechos de terceros.",
                  "No intentar vulnerar, descompilar, hacer ingeniería inversa ni acceder sin autorización a los sistemas, código fuente o infraestructura del Proveedor.",
                  "Mantener actualizado el catálogo de productos/servicios y la información del negocio cargada en el panel para garantizar que el asistente brinde información precisa a los clientes finales.",
                  "Abonar el servicio en tiempo y forma según el plan contratado.",
                  "Notificar al Proveedor cualquier uso no autorizado de su cuenta en forma inmediata.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
              Obligaciones del Proveedor
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>{COMPANY} se compromete a:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Prestar el servicio contratado con razonable diligencia y aplicando buenas prácticas de la industria.",
                  "Mantener disponible la plataforma con un objetivo de uptime del 95% mensual, excluyendo mantenimientos programados y causas de fuerza mayor.",
                  "Notificar con anticipación razonable cualquier mantenimiento planificado que implique interrupción del servicio.",
                  "Guardar confidencialidad sobre la información del Cliente y sus clientes finales, conforme se detalla en la Política de Privacidad.",
                  "Realizar copias de seguridad periódicas de la información almacenada en la plataforma.",
                  "Proporcionar soporte técnico básico dentro de los plazos de respuesta comprometidos.",
                  "Informar al Cliente sobre cambios relevantes en los términos del servicio con un preaviso razonable.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
              Propiedad Intelectual
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Toda la plataforma {COMPANY}, incluyendo su código fuente, diseño, algoritmos, interfaces,
                base de datos, flujos de automatización, nombre comercial y marca, son propiedad exclusiva
                del Proveedor y están protegidos por las leyes de propiedad intelectual de la{" "}
                {COUNTRY} y los tratados internacionales aplicables.
              </p>
              <p>
                Al contratar el servicio, el Cliente recibe una <strong className="text-gray-200">licencia de uso limitada,
                no exclusiva, intransferible y revocable</strong> para utilizar la plataforma durante la vigencia
                del contrato y únicamente para los fines descritos en estos Términos.
              </p>
              <p>
                El Cliente conserva la propiedad de todos los datos e información que cargue en la plataforma
                (menú, productos, configuración del negocio, etc.). Al subir dicho contenido, el Cliente otorga
                al Proveedor una licencia limitada para procesarlo y almacenarlo con el único fin de prestar el
                servicio contratado.
              </p>
              <p>
                Queda estrictamente prohibida la reproducción total o parcial, distribución, modificación,
                ingeniería inversa o uso comercial no autorizado de cualquier componente de la plataforma.
              </p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
              Limitación de Responsabilidad
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                El servicio se provee <strong className="text-gray-200">&ldquo;tal como está&rdquo;</strong> y en la medida en que la
                legislación argentina lo permite, el Proveedor no garantiza que el servicio sea ininterrumpido,
                libre de errores o que satisfaga todos los requerimientos específicos del Cliente.
              </p>
              <p>
                <strong className="text-gray-200">El Proveedor no será responsable por:</strong>
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Interrupciones del servicio ocasionadas por fallos de terceros proveedores (Meta/WhatsApp, proveedores de nube, servicios de IA, etc.) sobre los cuales el Proveedor no tiene control.",
                  "Pérdidas económicas derivadas de la falta de disponibilidad temporal del servicio, salvo dolo o culpa grave del Proveedor.",
                  "Daños causados por el uso indebido del servicio por parte del Cliente o por incumplimiento de las políticas de uso de Meta Platforms.",
                  "Inexactitudes en las respuestas generadas por el asistente de inteligencia artificial, dado que el modelo puede cometer errores. El Cliente es responsable de mantener actualizada la información del negocio.",
                  "Pérdidas de datos ocasionadas por causa de fuerza mayor o por negligencia del propio Cliente (pérdida de credenciales, acceso no autorizado por terceros, etc.).",
                  "Cambios en las políticas de Meta/WhatsApp Business que afecten la funcionalidad del servicio.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                En ningún caso la responsabilidad total del Proveedor frente al Cliente superará el monto
                equivalente a los pagos realizados por el Cliente en los últimos <strong className="text-gray-200">3 meses</strong> anteriores
                al evento que originó el reclamo.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">8</span>
              Uso Aceptable — Conductas Prohibidas
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Queda expresamente prohibido utilizar {COMPANY} para:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Enviar mensajes masivos no solicitados, cadenas de mensajes o spam a través de WhatsApp.",
                  "Distribuir contenido ilegal, difamatorio, engañoso, obsceno, violento, discriminatorio o que incite al odio.",
                  "Suplantar la identidad de otras personas, empresas u organismos.",
                  "Realizar actividades fraudulentas, estafas o cualquier acción que perjudique a los usuarios finales del negocio.",
                  "Intentar acceder sin autorización a cuentas de otros Clientes, a los servidores del Proveedor o a cualquier sistema conectado.",
                  "Cargar o transmitir virus, malware u otro software malicioso.",
                  "Utilizar el servicio en rubros o actividades que violen la legislación argentina vigente.",
                  "Revender, sublicenciar o ceder el acceso al servicio a terceros sin autorización expresa del Proveedor.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                El incumplimiento de cualquiera de las conductas anteriores faculta al Proveedor a suspender
                o dar de baja el servicio en forma inmediata y sin derecho a reembolso, sin perjuicio de las
                acciones legales que pudieran corresponder.
              </p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">9</span>
              Cancelación y Baja del Servicio
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                <strong className="text-gray-200">Cancelación por el Cliente:</strong> El Cliente puede solicitar la baja del servicio en
                cualquier momento, sin permanencia mínima, comunicándose a{" "}
                <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>.
                La baja será efectiva al finalizar el período mensual ya abonado. No se realizan reembolsos
                proporcionales por días no utilizados dentro del período en curso.
              </p>
              <p>
                <strong className="text-gray-200">Cancelación por el Proveedor:</strong> {COMPANY} podrá dar de baja el servicio en
                las siguientes situaciones:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Falta de pago por más de 15 días corridos desde el vencimiento.",
                  "Violación de las conductas prohibidas descritas en la Sección 8.",
                  "Solicitud de cierre definitivo de operaciones del Proveedor, con preaviso de 30 días.",
                  "Incumplimiento grave o reiterado de estos Términos.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                <strong className="text-gray-200">Exportación de datos:</strong> Ante cualquier baja (por cualquiera de las partes),
                el Cliente tiene derecho a solicitar la exportación de sus datos (pedidos, configuración,
                historial) dentro de los <strong className="text-gray-200">30 días</strong> posteriores a la fecha de baja efectiva.
                Pasado dicho plazo, los datos podrán ser eliminados definitivamente de los servidores del Proveedor.
              </p>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">10</span>
              Confidencialidad
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Ambas partes acuerdan mantener la más estricta confidencialidad sobre toda información que
                sea designada como confidencial o que, por su naturaleza, deba razonablemente considerarse
                confidencial. Esta obligación subsistirá por un período de <strong className="text-gray-200">2 años</strong> posteriores
                a la finalización del vínculo contractual.
              </p>
              <p>
                No se considerará información confidencial aquella que: (a) sea o se vuelva de dominio
                público sin responsabilidad de la parte receptora; (b) la parte receptora ya conociera con
                anterioridad a su divulgación; (c) sea recibida lícitamente de un tercero sin obligación de
                confidencialidad; o (d) deba divulgarse por mandato legal o judicial.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">11</span>
              Inteligencia Artificial — Alcance y Limitaciones
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                El asistente virtual de {COMPANY} utiliza modelos de inteligencia artificial de terceros
                (incluyendo pero no limitado a modelos de lenguaje natural provistos por Groq, Meta Llama
                y otras plataformas). El Cliente reconoce y acepta que:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Los modelos de IA pueden generar respuestas incorrectas, incompletas o inapropiadas en circunstancias excepcionales.",
                  "El asistente opera sobre la base de la información cargada por el Cliente. La precisión de las respuestas depende directamente de la calidad y actualización de dicha información.",
                  "FaChat no garantiza que el asistente interpretará correctamente el 100% de los mensajes recibidos.",
                  "El Cliente es responsable de monitorear periódicamente las conversaciones del asistente y notificar al Proveedor cualquier comportamiento inesperado.",
                  "La tecnología de IA subyacente puede ser actualizada o reemplazada por el Proveedor en cualquier momento con el fin de mejorar el servicio.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">12</span>
              Servicios de Terceros
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                El servicio de {COMPANY} se apoya en plataformas de terceros para su funcionamiento,
                entre ellas: Meta Platforms (WhatsApp Business API), proveedores de infraestructura cloud,
                servicios de inteligencia artificial y herramientas de gestión de conversaciones.
              </p>
              <p>
                El Cliente reconoce que al utilizar {COMPANY} está sujeto también a los Términos de
                Servicio y Políticas de Meta for Developers en lo relativo al uso de WhatsApp Business.
                {COMPANY} no es responsable de cambios en las políticas de Meta que puedan afectar la
                disponibilidad o funcionalidad del servicio.
              </p>
              <p>
                El Proveedor selecciona sus proveedores de infraestructura con criterios de seguridad y
                confiabilidad, y exige contractualmente el cumplimiento de estándares de protección de datos
                equivalentes o superiores a los presentes Términos.
              </p>
            </div>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">13</span>
              Modificaciones a los Términos
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                {COMPANY} se reserva el derecho de modificar los presentes Términos y Condiciones en
                cualquier momento. Toda modificación será comunicada al Cliente con un preaviso mínimo de
                <strong className="text-gray-200"> 15 días corridos</strong> mediante correo electrónico a la dirección registrada.
              </p>
              <p>
                Si el Cliente continúa utilizando el servicio luego de la fecha de vigencia de los nuevos
                Términos, se considerará que los ha aceptado. En caso de no aceptarlos, el Cliente podrá
                dar de baja el servicio sin penalidad antes de dicha fecha.
              </p>
              <p>
                La versión vigente de los Términos siempre estará disponible en la dirección{" "}
                <Link href="/terminos" className="text-blue-400 hover:underline">fachat.com.ar/terminos</Link>.
              </p>
            </div>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">14</span>
              Ley Aplicable y Jurisdicción
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Los presentes Términos y Condiciones se rigen por las leyes de la{" "}
                <strong className="text-gray-200">{COUNTRY}</strong>, en particular por el Código Civil y Comercial de la Nación
                (Ley N° 26.994), la Ley de Defensa del Consumidor (Ley N° 24.240 y modificatorias) y la
                Ley de Protección de Datos Personales (Ley N° 25.326).
              </p>
              <p>
                Para la resolución de cualquier controversia derivada del presente acuerdo, las partes
                acuerdan someterse a la jurisdicción de los Tribunales Ordinarios competentes de la{" "}
                <strong className="text-gray-200">{COUNTRY}</strong>, renunciando expresamente a cualquier otro fuero que pudiera
                corresponderles.
              </p>
              <p>
                Antes de iniciar cualquier acción legal, las partes se comprometen a intentar resolver
                la disputa de buena fe mediante comunicación directa por un período no menor a{" "}
                <strong className="text-gray-200">15 días hábiles</strong>.
              </p>
            </div>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">15</span>
              Contacto
            </h2>
            <div className="space-y-3 text-gray-400 pl-10">
              <p>
                Para consultas, reclamos o notificaciones relacionadas con estos Términos, podés
                comunicarte con nosotros a través de:
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                  <span>
                    <strong className="text-gray-200">Email:</strong>{" "}
                    <a href={`mailto:${EMAIL_LEGAL}`} className="text-blue-400 hover:underline">{EMAIL_LEGAL}</a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                  <span>
                    <strong className="text-gray-200">Panel de clientes:</strong>{" "}
                    <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{PANEL_URL}</a>
                  </span>
                </li>
              </ul>
              <p>
                El tiempo de respuesta habitual es de <strong className="text-gray-200">1 a 3 días hábiles</strong>.
              </p>
            </div>
          </section>

        </div>

        {/* Footer de la página */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {COMPANY}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/privacidad" className="hover:text-gray-400 transition-colors">
              Política de Privacidad
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
