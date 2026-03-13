import "./globals.css";

export const metadata = {
  title: "FaChat — Tu restaurante automatizado con IA",
  description: "Asistente virtual de WhatsApp para restaurantes. Tomá pedidos, respondé consultas y gestioná tu menú las 24 horas, sin esfuerzo.",
  openGraph: {
    title: "FaChat — Tu restaurante automatizado con IA",
    description: "Asistente virtual de WhatsApp para restaurantes. Tomá pedidos, respondé consultas y gestioná tu menú las 24 horas.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
