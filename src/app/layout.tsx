// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimacaoPaginaSuave from "@/components/AnimacaoPaginaSuave"; 
import ClientFundoWrapper from "@/components/ClientFundoWrapper"; // 🔑 Importa o novo wrapper

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
        {/* 🔑 Usa o novo wrapper simples */}
        <ClientFundoWrapper /> 
        <AnimacaoPaginaSuave>
          {children}
        </AnimacaoPaginaSuave>
      </body>
    </html>
  );
}