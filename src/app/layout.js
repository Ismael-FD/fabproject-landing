import "./globals.css";

export const metadata = {
  title: "FaChat :)",
  description:
    "Asistente virtual con IA para WhatsApp. Tomá pedidos, respondé consultas y gestioná tu catálogo las 24 horas. Para barberías, restaurantes, tiendas y más.",
  keywords: [
    "chatbot whatsapp argentina",
    "asistente virtual whatsapp",
    "automatización negocios argentina",
    "bot whatsapp restaurante",
    "bot whatsapp barbería",
    "fachat",
  ],
  authors: [{ name: "FaChat" }],
  creator: "FaChat",
  openGraph: {
    title: "FaChat — Automatizá la atención de tu negocio por WhatsApp",
    description:
      "Asistente virtual con IA para WhatsApp. Tomá pedidos, respondé consultas y gestioná tu catálogo las 24 horas.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/favicon.png", width: 1200, height: 630, alt: "FaChat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaChat — Automatizá la atención de tu negocio por WhatsApp",
    description: "Asistente virtual con IA para WhatsApp para negocios en Argentina.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
