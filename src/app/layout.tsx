import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimacaoPagina from "@/components/AnimacaoPagina";
import FundoTecnologico from "@/components/FundoTecnologico"; // 1. Importe o componente

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
        <FundoTecnologico /> {/* 2. Adicione o fundo aqui */}
        <AnimacaoPagina>{children}</AnimacaoPagina>
      </body>
    </html>
  );
}