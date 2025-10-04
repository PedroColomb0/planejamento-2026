// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FundoTecnologico from "@/components/FundoTecnologico";
import AnimacaoPaginaSuave from "@/components/AnimacaoPaginaSuave"; // 1. Importe o novo componente

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
        {/* 2. Envolva o {children} com o novo componente */}
        <AnimacaoPaginaSuave>
          {children}
        </AnimacaoPaginaSuave>
      </body>
    </html>
  );
}