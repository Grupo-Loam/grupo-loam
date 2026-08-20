import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LOAM Grupo Empresarial",
    template: "%s | LOAM Grupo Empresarial",
  },
  description:
    "Desarrollamos y gestionamos negocios con propósito, generando valor sostenible para las personas, colaboradores y futuras generaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}