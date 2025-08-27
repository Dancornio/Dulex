import type { Metadata } from "next";
import "./globals.css"; //

export const metadata: Metadata = {
  title: "Dulex - Sistema de Almoxarifado",
  description: "Gerenciamento de itens e chaves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}