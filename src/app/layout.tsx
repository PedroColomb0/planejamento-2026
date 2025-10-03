// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import AnimacaoPagina from "@/components/AnimacaoPagina"; // 1. Linha removida/comentada
import FundoTecnologico from "@/components/FundoTecnologico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apresentação Tecnológica",
  description: "Criado com Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <FundoTecnologico />
        {children} 
      </body>
    </html>
  );
}